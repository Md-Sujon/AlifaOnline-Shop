
import React, { useContext } from 'react';
import firebase from "firebase/app";
import { Button } from 'react-bootstrap';
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import icon from '../../images/Group 573.png'
import './Login.css'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);;
 }else {
    firebase.app();
 }


const Login = () => {

    var provider = new firebase.auth.GoogleAuthProvider();
   const [loggedInUser,setLoggedInUser]=useContext(UserContext);
   const history=useHistory();
   const location=useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

   const handleGoogleSingIn =()=>{
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // console.log(result);
      const {displayName,email}=result.user;
      const singedInUser={name:displayName,email}
    setLoggedInUser(singedInUser)
    history.replace(from)
    
  }).catch((error) => {
    console.log(error);
    
  });

}

    return (
        <div className="Login">
            {/* <h1>This is Login</h1> */}
            <Button  onClick={handleGoogleSingIn} variant="primary">Sing In Google</Button>{' '}
        </div>
    );
};

export default Login;