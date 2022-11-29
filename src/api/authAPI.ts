import {instance, ResultCodeEnum, ResultCodeForCaptcha} from "./api";

export type APIResponseType<D={},RC = ResultCodeEnum> = {
    data:D
    messages:Array<string>
    resultCode:RC
}

type MeResponseDataType = {
        id: number
        email: string
        login: string
}
type LoginResponseDataType = {
        id: number
}
export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeForCaptcha>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}