import SendMessage from './SendMessage';

import { useEffect, useState } from "react";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from './Message';
import { useParams } from 'react-router-dom';


const CommunityChatBox = () => {



    const [messages, setMessages] = useState([]);

    let { roomid } = useParams();
    console.log('roomid', roomid)
    if (roomid == null)
        roomid = "messages";
    else
        roomid = atob(roomid);


    useEffect(() => {
        const q = query(
            collection(db, roomid),
            orderBy("createdAt"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id });
            });

            setMessages(fetchedMessages);


        });
        return () => unsubscribe;
    }, []);

    return (
        <div className="h-[90vh] flex flex-col bg-gray-100 dark:bg-gray-800">
            {roomid}
            <div className="flex-1 p-4 overflow-y-auto">
                {
                    messages.length == 0 ?
                        <h1 className='flex justify-center items-center h-[50vh] font-bold text-2xl text-white'>Welcome to the {roomid === "messages" ? "Community Chat" : `Chat ${roomid}`}</h1> :
                        messages.map((message, index) => (
                            <Message key={index} message={message} />
                        ))
                }
            </div>

            <SendMessage />
        </div>
    );
};

export default CommunityChatBox;

