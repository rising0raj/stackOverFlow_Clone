import React from 'react'
import Leftsidebar from '../../component/Leftsidebar/Leftsidebar'
import { useLocation } from 'react-router-dom'
import UserList from './UserList.jsx'
import './user.css'


const User = () => {
    
    return (
    <div>
        <div className="home-container-1">
        <Leftsidebar/>
        <div className="home-container-2" style={{marginTop:"30px"}}>
            <h1 style={{fontWeight:"400"}}>Users</h1>
            <UserList/>
        </div>

        </div>
    </div>
    )
}

export default User