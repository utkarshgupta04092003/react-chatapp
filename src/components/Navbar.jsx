import React, { useState } from "react";
import GoogleSignin from "../../public/assets/google.png";


// Auth
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";



const NavBar = () => {
    // const [user] = useAuthState(auth);
    const [user] = useAuthState(auth);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
        alert('successfully loggedin');
        console.log(auth);
      };
      const signOut = () => {
        auth.signOut();
        console.log(user);

      };
 

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
      {user?.displayName}

      {console.log(user)}
    </nav>
  );
};
export default NavBar;