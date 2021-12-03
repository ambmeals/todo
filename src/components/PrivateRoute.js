import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import {Route, Redirect} from 'react-router-dom'

//Below we pass the componenet that will try to rendered to the virtual DOM>

export default function PrivateRoute({component: Component, ...rest}) {
    const {currentUser} = useAuth();

    return (
        //Below we accept a Route element to render is there is a currentUser authenticated 
        //If the user is not authenticated in a private route, we will redirect them to the login
        <Route {...rest} render={props => {
            return currentUser ? <Component {...props} /> : <Redirect to="/login" />
        }}></Route>

    )
}
