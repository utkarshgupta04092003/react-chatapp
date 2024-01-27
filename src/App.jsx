import React from 'react'
import Home from './components/Home'
import NavBar from './components/Navbar'
import AllOptions from './components/AllOptions'
import AllRooms from './components/AllRooms';
import Personalized from './components/Personalized';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChatBox from './components/ChatBox';


// authentication
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Welcome from './components/Welcome';



export default function App() {


  
  const [user] = useAuthState(auth);
  console.log('user', user);
  
  if(!user)   
      return <><BrowserRouter><NavBar/><Welcome/></BrowserRouter></>
  return (
    <div>



      <BrowserRouter>
      <NavBar/>
        <Routes>
        <Route path={'/'} element={<AllOptions/>}/>
        <Route path={'/community'} element={<Home/>}/>
        <Route path={'/rooms'} element={<AllRooms/>}/>
        <Route path={'/rooms/:roomid'} element={<ChatBox/>}/>
        <Route path={'/personalized'} element={<Personalized/>}/>
        <Route path={'*'} element={<h1>Error Page</h1>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
