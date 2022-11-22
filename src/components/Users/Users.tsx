import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UsersType} from "../../types/types";

type PropsType ={
    currentPage:number
    onPageChanged:(pageNumber:number)=>void
    totalUsersCount:number
    pageSize:number
    users: Array<UsersType>
    followingInProgress:Array<number>
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
}

let Users: React.FC<PropsType> = ({currentPage,onPageChanged,totalUsersCount,pageSize,users, ...props
}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        {
            users.map(u => <User user={u} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} key={u.id}/> )}
    </div>
}
export default Users;