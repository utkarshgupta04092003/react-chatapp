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
import { useNavigate, useParams } from 'react-router-dom';


const ChatBox = () => {


    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    let { roomid } = useParams();
    console.log('roomid', roomid)
    // if (roomid == null || roomid==undefined || roomid == false)
    //     roomid = "messages";
    // else
    //     roomid = atob(roomid);

    console.log('rom:',roomid);
    useEffect(() => {


        const q = query(
            collection(db, (roomid)),
            orderBy("createdAt"),
            limit(50)
        );
        console.log('query called');
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id });
            });
            
            let localval = localStorage.getItem(roomid);
            console.log('localval', roomid, localval);
            if( localval == false || localval == "null" || localval == null || localval == undefined){
                roomVerification(fetchedMessages);
            }
            else
                setMessages(fetchedMessages);
              



        });

        // console.log('fetched ',fetchedMessages);
        
        
        function roomVerification(fetchedMessages) {
            swal('hello');
            swal(`Enter Password for ${roomid.toUpperCase()}`, {
                content: {
                    element: "input",
                    attributes: {
                        placeholder: "Type your password",
                        type: "password",
                    },
                },
            })
            .then((value) => {
                swal(`You typed: ${value}`);
                if (value.toLowerCase() === roomid.toLowerCase()) {
                    swal("Good job!", "Successful Loggedin!", "success").
                        then(() => {
                            localStorage.setItem(roomid, true);   
                             
                            setMessages(fetchedMessages)
                        });
                        console.log('fetchedddd', fetchedMessages)
                }
                else {
                    swal("Oops!", "Invalid Password!", "error")
                        .then(() => navigate(-1));

                }
                console.log(value)
            });
        }


        return () => {
            unsubscribe;
            localStorage.setItem(roomid, null);    
        };
    }, []);

    return (
        <div className="h-[90vh] flex flex-col bg-gray-100 dark:bg-gray-800">
            {/* {roomid} */}
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

export default ChatBox;
