import React from 'react'
import {useSelector} from 'react-redux'
import Users from './Users'

const UserList = () => {

    const users=useSelector((state)=>state.usersReducer)

    return (
    <div className="user-list-container" >
        {
            users.map((user)=>(
                <Users user={user} key={user?._id}/>
            ))
        }
    </div>
    )
}

export default UserList
