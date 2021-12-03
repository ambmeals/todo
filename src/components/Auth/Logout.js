import React from 'react'
import { useAuth } from  '../../contexts/AuthContext';
import { useHistory } from 'react-router';
import './Login.css';
import Profile from './Profile';

export default function Logout() {
    const {logout, currentUser} = useAuth();
    const history = useHistory();

    function handleAuth(){
        logout();
        history.push("/");
    }
    return (
        <div className="logout text-center p-3 bg-dark text-white">
            {currentUser &&
            <>
            <Profile/>
            <button onClick ={()=> handleAuth()} className="btn btn-info">Logout</button>
            
            </>
            }
        </div>
    )
}