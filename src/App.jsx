import React from 'react'
import NavBar from './components/Navbar';
import ChatBox from './components/ChatBox';
import Welcome from './components/Welcome';

// authentication
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function App() {

  const [user] = useAuthState(auth);
  console.log('user', user);

  return (
    <div className=' text-red-500'>

      <NavBar/>
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  )
}
