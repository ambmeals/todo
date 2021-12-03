import React, {useState, useEffect, useContext} from 'react';
import firebaseApp, {authResult} from '../base'

import firebase from 'firebase'

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({children}){
    //Create a hook that will capture the user info
    const [currentUser, setCurrentUser] = useState();
    //Create a hook that will look to see if componenets are still loading 
    //This will be used to wait to show the componenets in the UI until the context informs the component of the user information.
    const[loading, setLoading] = useState(true);

    //The below function will be invoked when the user clicks the login button 
    async function authenticate(){
        //Below we create a new Firebase GitHubAuthProvider object 
        //which will tell Firebase to communicate with the GitHub about the user info 
        const authProvider = new firebase.auth.GithubAuthProvider();

      
        return(
            //Below is a Firebase signin mechanism that will open the popup and attempt to connect with GitHub to the user's info
            firebaseApp.auth().signInWithPopup(authProvider).then(authHandler)
        );
    }

    //This function below will be handled as the promise is fulfilled with the signInWithPopup.
    //It will handle user info and locally, so it sets the currentUser hook to specific datas.
    async function authHandler(authData){
        console.log(authData);
        //I could put logic here that would save user info to a database
        setCurrentUser(authData.user);
    }

    //Logout
    async function logout(){
        return firebaseApp.auth().signOut().then(setCurrentUser(null));
    }

    const value = {currentUser, authenticate, logout};

  
    useEffect(() => {
        const authChange = authResult.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);

        })

        return authChange;
    }, []);


    return (
    
     <AuthContext.Provider value={value}>
      
         {!loading && children}
     </AuthContext.Provider>

    )

}
