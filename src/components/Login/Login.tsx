import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../redux/authReducer";
import {Navigate} from "react-router-dom";
import style from "../common/FormsControl/FormsControls.module.scss"
import {AppStateType} from "../redux/reduxStore";
type LoginFormOwnProps = {
    captchaUrl:string | null
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKey>('Email', "email", [required], Input)}
            {createField<LoginFormValuesTypeKey>('Password', "password", [required], Input, {type: 'password'})}
            {createField<LoginFormValuesTypeKey>(undefined, "rememberMe", [], Input, {type: 'checkbox'}, 'remember me')}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormValuesTypeKey>("symbols from images", "captcha", [required], Input, {},)}
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm)

type MapStatePropsType = {
    captchaUrl:string|null
    isAuth:boolean
}
type MapDispatchPropsType = {
    login:(email:string, password:string, rememberMe:boolean, captcha:any)=>void
}

export type LoginFormValuesType = {
    captcha: string;
    rememberMe: boolean;
    password: string;
    email: string
}
type LoginFormValuesTypeKey = Extract <keyof LoginFormValuesType, string>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);