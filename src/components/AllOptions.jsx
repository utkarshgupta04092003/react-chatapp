import React from 'react';
import { Link } from 'react-router-dom';

const AllOptions = () => {
  return (
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
        className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500"
      >
        Personalized Chat
      </Link>
      
    </div>
  );
};

export default AllOptions;
