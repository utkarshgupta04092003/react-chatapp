import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useParams } from "react-router-dom";


const SendMessage = () => {

    const [message, setMessage] = useState("");
    let {roomid} = useParams();
    if(roomid == null)
        roomid = "messages";
    console.log('roomid from send emssage',roomid);
    const sendMessage = async (event) => {
        event.preventDefault();
        console.log('text', message)
        if (message.trim() === "") {
            alert("Enter valid message");
            return;
        }
        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, roomid), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        });
        setMessage("");
    };

    return (

        <form className=" h-[10vh]  p-4 bg-white dark:bg-gray-700 flex items-center" onSubmit={(event) => sendMessage(event)}>
            <input
                type="text"
                className="flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                Send
            </button>
        </form>

    );
};
export default SendMessage;