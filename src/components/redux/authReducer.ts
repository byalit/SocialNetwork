import {ResultCodeEnum, ResultCodeForCaptcha} from "../../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../../api/authAPI";
import {securityAPI} from "../../api/securityAPI";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";
import {Action} from "redux";


let initialState = {

    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null//if null then captcha is not required

}

const authReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case "SN/auth/GET_CAPTCHA_URL_SUCCESS":
        case "SN/auth/SET_USER_DATA":
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData:(userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: "SN/auth/SET_USER_DATA",
        payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: "SN/auth/GET_CAPTCHA_URL_SUCCESS",
        payload: {captchaUrl}
    } as const),
}
export const getAuthUserData = ():ThunkType => async (dispatch)=>{
    let meData = await authAPI.me();
    if(meData.resultCode === ResultCodeEnum.Success) {
        let {id,login,email} = meData.data
        dispatch(actions.setAuthUserData(id,email,login,true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any):ThunkType => async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}
export const logout = ():ThunkType => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
    ;
}
export default authReducer;

export type InitialStateType = typeof initialState;
type ActionType = InferActionsTypes<typeof actions>
type ThunkType= BaseThunkType<ActionType | FormAction>