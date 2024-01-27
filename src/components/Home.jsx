import React from 'react'
import NavBar from './Navbar'
import ChatBox from './ChatBox';
import Welcome from './Welcome';

// authentication
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Home() {

  const [user] = useAuthState(auth);
  console.log('user', user);

  return (
    <div className=' text-red-500'>

      {!user ? <Welcome /> : <ChatBox />}
    </div>
  )
}
