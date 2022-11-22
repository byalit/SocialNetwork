import React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../redux/usersSelectors";
import {UsersType} from "../../types/types";
import {AppStateType} from "../redux/reduxStore";

type MapStatePropsType = {
    currentPage:number
    pageSize:number
    isFetching:boolean
    totalUsersCount:number
    users:Array<UsersType>
    followingInProgress:Array<number>
}
type MapDispatchPropsType = {
    getUsers:(currentPage:number,pageSize:number)=>void
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
}
type PropsType = MapStatePropsType & MapDispatchPropsType


class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const {currentPage,pageSize} = this.props
        this.props.getUsers(currentPage,pageSize)
    }

    onPageChanged = (pageNumber:number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber,pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? < Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}/>
        </>
    }

}
function mapStateToProps(state:AppStateType):MapStatePropsType {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
    connect<MapStatePropsType,MapDispatchPropsType,{},AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        getUsers: requestUsers
    })
)(UsersContainer)