import React from 'react';
import { Link } from 'react-router-dom';

export default function AllOptions() {
  return (
    <div>

      <Link to={'/'}>home</Link>
      <Link to={'/community'}>Community Chat</Link>
      <Link to={`/rooms`}>Chat room</Link>
      <Link to={`/personalized`}>Personalized chat</Link>

    </div>
  )
}
