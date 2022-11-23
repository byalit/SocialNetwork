import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../redux/authReducer";
import {AppStateType} from "../redux/reduxStore";

type MapStatePropsType = {
    isAuth:boolean
    login:any
}
type MapDispatchPropsType = {
    logout:()=>void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsType> {
  render () {
    return <Header {...this.props} />
  ;}
};
const mapStateToProps =(state:AppStateType):MapStatePropsType => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})
export default connect<MapStatePropsType,MapDispatchPropsType,{},AppStateType>
(mapStateToProps,{logout}) (HeaderContainer);
