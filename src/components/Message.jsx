import React, { useEffect, useRef } from "react";
import { auth } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  const bottomRef = useRef();

  useEffect(()=>{
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });

  })

  return (
    <div
      className={`flex mb-4 ${message?.uid === user?.uid ? "justify-end" : "justify-start"}`}
    >
      <img
        className="w-8 h-8 rounded-full mr-2"
        src={message?.avatar}
        alt="user avatar"
      />
      <div
        className={`p-4 max-w-xs rounded-lg ${
          message?.uid === user?.uid
            ? "bg-blue-500 text-white self-end"
            : "bg-gray-200 self-start"
        }`}
      >
        <p className="font-bold">{message?.name}</p>
        <p className="text-gray-900 ">{message?.text}</p>
      </div>

      <div ref={bottomRef} />

    </div>
  );
};

export default Message;
