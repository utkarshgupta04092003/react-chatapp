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



const ChatBox = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id });
            });
            // const sortedMessages = fetchedMessages.sort(
            //     (a, b) => a.createdAt - b.createdAt
            // );
            // setMessages(sortedMessages);
            setMessages(fetchedMessages);
           

        });
        return () => unsubscribe;
    }, []);

    return (
        <div className="h-[90vh] flex flex-col bg-gray-100 dark:bg-gray-800">
            <div className="flex-1 p-4 overflow-y-auto">
                {
                    messages.length == 0 ? 
                    <h1 className='flex justify-center items-center h-[50vh] font-bold text-2xl text-white'>Welcome to the Group</h1> :
                        messages.map((message, index) => (
                            <Message key={index} message={message} />
                        ))
                }
            </div>

            <SendMessage />
        </div>
    );
};

export default ChatBox;
