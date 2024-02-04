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
      <div className="text-2xl font-bold">React ChatApp</div>


      <div className="p-8 bg-gray-100 dark:bg-gray-800">
        <Link
          to={'/'}
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 mr-4"
        >
          Home
        </Link>
        <Link
          to={'/community'}
          className="text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-500 mr-4"
        >
          Community Chat
        </Link>
        <Link
          to={`/rooms`}
          className="text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-500 mr-4"
        >
          Chat Room
        </Link>
        <Link
          to={`/personalized`}
          className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500 mr-4"
        >
          Personalized Chat
        </Link>

        <Link>
          {user?.displayName && (
            <span>User: {user.displayName}</span>
          )}
        </Link>
      </div>


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
          <img src={GoogleSignin} alt="Sign in with Google" className='mx-auto border border-black  rounded-lg' />
        </button>
      )}

    </nav>
  );
};

export default NavBar;
