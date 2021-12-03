//Before we created this file, we created a new Firebase application on their website.
//Then we registered the app and it gave us some connection info to use in any app that will connect to the Firebase app
//After we registered the site, we created a .env file that houses the sensitive connection info from Firebase.
//The .env is listed in the .gitignore so the PRIVATE info won't be shared.

//Next we ran npm install firebase@8.10.0 to install the functionality necessary to connect to the Firebase app

//This file manages the connection to Firebase.
//It is helpful to keep config/connection functionality in its own file - imakes it easy to maintain
import firebase from 'firebase'
import 'firebase/auth'

//The object below is our way of connecting the app to Firebase, so we can utilize the authentication functionality 
//Along with authentication, Firebase can provide storage of files, Firestore (standard database), and RealTime database functionality 
//Along with this, it can provide messaging, maching learning, hosting, and other functionality 

const firebaseApp = firebase.initializeApp({
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID
    })

    //Below will initialize the authenticaion functionality from Firebase 
    export const authResult = firebaseApp.auth();
    export default firebaseApp;

    //After you have completed base.js and .env, connect it to your Github