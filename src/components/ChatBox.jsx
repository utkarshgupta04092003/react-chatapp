import React, { useState } from 'react';
import SendMessage from './SendMessage';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
    console.log(messages);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800">
      <div className="flex-1 p-4 overflow-y-auto border border-white">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex justify-end mb-2 p-2 rounded-md ${
              message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="p-4 bg-white dark:bg-gray-700 flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </div>

      <SendMessage/>
    </div>
  );
};

export default ChatBox;
