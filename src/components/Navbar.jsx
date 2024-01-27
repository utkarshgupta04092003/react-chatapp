import React from "react";
import GoogleSignin from "/assets/google.png";

// Auth
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    // alert("Successfully logged in");
    console.log(auth);
  };

  const signOut = () => {
    auth.signOut();
    console.log(user);
  };

  return (
    <nav className="h-[10vh] flex items-center justify-between p-4 bg-gray-800 text-white">
      <div  className="text-2xl font-bold">React ChatApp</div>
    <Link to={'/'}>Home</Link>
                  {user?.displayName && (
        <div className="ml-4 font-bold text-lg text-gray-300">{user.displayName}</div>
      )}
      {user ? (
        
        <button
          onClick={signOut}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          type="button"
        >
          Sign Out
        </button>
      ) : (
        <button
          className=" text-white py-2 px-4 rounded"
          onClick={googleSignIn}
          type="button"
        >
          <img src={GoogleSignin} alt="Sign in with Google"             className='mx-auto border border-black  rounded-lg'/>
        </button>
      )}
      
    </nav>
  );
};

export default NavBar;
