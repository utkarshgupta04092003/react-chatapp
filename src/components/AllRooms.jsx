import React from 'react'
import { Link } from 'react-router-dom'
export default function AllRooms() {

  
  return (
    <div>
      AllRooms

      <Link to={`/rooms/room1`}> Room1</Link>
      <Link to={`/rooms/room2`}> Room2</Link>
      <Link to={`/rooms/room3`}> Room3</Link>
      <Link to={`/rooms/room4`}> Room4</Link>
    </div>
  )
}
