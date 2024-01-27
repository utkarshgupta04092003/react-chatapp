import React from 'react'
import NavBar from './components/Navbar';
import ChatBox from './components/ChatBox';
import Welcome from './components/Welcome';

// authentication
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function App() {

  const [user] = useAuthState(auth);

  return (
    <div className=' text-red-500'>
      App .js

      <NavBar/>
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  )
}
