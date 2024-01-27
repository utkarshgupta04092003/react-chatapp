import React from 'react';
import GoogleSignin from "../../public/assets/google.png";




// Auth
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";



const Welcome = () => {


    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
        
        console.log(auth);
      };


  return (
    <div className="h-[90vh] flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-md shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
          Welcome to ChatApp
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Connect with people around the world!
        </p>
        <button className="rounded-lg w-full">
          <img src={GoogleSignin} alt=""
            onClick={googleSignIn}
            className='mx-auto border border-black  rounded-lg'/>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
