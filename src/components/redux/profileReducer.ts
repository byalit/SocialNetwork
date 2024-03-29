import profile from "../Profile/Profile";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../../types/types";
import {usersAPI} from "../../api/usersAPI";
import {profileAPI} from "../../api/profileAPI";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS"
let initialState = {

    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 1, message: "It's my first post", likesCount: 11},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''

};
export type InitialStateType = typeof initialState
const profileReducer = (state = initialState, action:any):InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case SET_STATUS:
            return {
                ...state,
                status: action.status

            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos:action.photos} as ProfileType}
        }
        default:
            return state
    }
}
type AddPostActionCreatorActionType={
    type: typeof ADD_POST
    newPostText:string
}
export const addPostActionCreator = (newPostText:string):AddPostActionCreatorActionType => ({type: ADD_POST, newPostText});
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile:ProfileType):SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
type SetStatusActionType ={
    type: typeof SET_STATUS
    status:string
}
export const setStatus = (status:string):SetStatusActionType => ({type: SET_STATUS, status});
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos:PhotosType
}
export const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId:number) => async (dispatch:any) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data))

};
export const getStatus = (userId:number) => async (dispatch:any) => {
    let data  = await profileAPI.getStatus(userId);
    dispatch(setStatus(data))

};
export const updateStatus = (status:string) => async (dispatch:any) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};
export const savePhoto = (file:any) =>async (dispatch:any)=>{
    let data = await profileAPI.savePhoto(file);
    if(data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile:ProfileType) =>async (dispatch:any, getState:any)=>{
    const userId=getState().auth.userId
    const data  = await profileAPI.saveProfile(profile);
    if(data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error:data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer;
