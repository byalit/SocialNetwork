import axios from "axios";
import {UsersType} from "../types/types";

export const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "24ebf16a-97c7-4000-a065-1d19c52c1157"
    }
})
export enum ResultCodeEnum{
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptcha{
    CaptchaIsRequired = 10
}
export type GetItemsType = {
    items: Array<UsersType>
    totalCount: number
    error: string|null
}