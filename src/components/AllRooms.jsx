import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AllRooms = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const roomId = e.target.id;
    navigate(`/rooms/${(roomId)}`);
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-800 h-[90vh]">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">All Rooms</h1>
      <ul className="space-y-2 w-1/2 mx-auto my-5">
        <li
          className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-700"
          onClick={handleClick}
          id="room1"
        >
          Room 1
        </li>
        <li
          className="cursor-pointer bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 dark:bg-green-800 dark:hover:bg-green-700"
          onClick={handleClick}
          id="room2"
        >
          Room 2
        </li>
        <li
          className="cursor-pointer bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 dark:bg-yellow-800 dark:hover:bg-yellow-700"
          onClick={handleClick}
          id="room3"
        >
          Room 3
        </li>
        <li
          className="cursor-pointer bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 dark:bg-red-800 dark:hover:bg-red-700"
          onClick={handleClick}
          id="room4"
        >
          Room 4
        </li>
      </ul>
    </div>
  );
};

export default AllRooms;


// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// export default function AllRooms() {

//   const navigate = useNavigate();

//   const handleClick = (e) => {
//     console.log(e.target.id);

//     navigate(`/rooms/${btoa(e.target.id)}`);
//   }

//   return (
//     <div>
//       AllRooms

//       <ul>
//         <li onClick={handleClick} id='room1'>Room 1</li>
//         <li onClick={handleClick} id='room2'>Room 2</li>
//         <li onClick={handleClick} id='room3'>Room 3</li>
//         <li onClick={handleClick} id='room4'>Room 4</li>
//       </ul>


//     </div>
//   )
// }
