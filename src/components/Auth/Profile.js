import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function Profile() {
    const {currentUser} = useAuth();
    return (
       <span className="profile p-2">
           {/* Below we access the current user to disdplay specific info about them  */}
           {currentUser.email}
           <img src={currentUser.photoURL} alt={`currentUser.email}profile`}/>
       </span>
    )
}
