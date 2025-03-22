import React from 'react'
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
export default function ChatBox({hidingChatBox}) {
  const [teachers] = useState([
    { id: 1, name: 'Mr. John' },
    { id: 2, name: 'Ms. Sarah' },
    { id: 3, name: 'Dr. Adams' }
  ]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { text: newMessage, sender: 'parent' }]);
    setNewMessage('');
  };

  return (
    <div className="flex h-[600px] w-full rounded-xl shadow-md bg-blue-100">
      {/* Left Sidebar: Teachers List */}
      <div className="w-1/3 border-r p-4 relative bg-gray-100">
        <button onClick={hidingChatBox} className='bg-gray-600 p-[4px] text-white rounded absolute top-0 left-0'><IoMdClose size={25} /></button>
        <h2 className="text-lg font-semibold mb-4 mt-5">Available Teachers</h2>
        <ul>
          {teachers.map(teacher => (
            <li
              key={teacher.id}
              onClick={() => setSelectedTeacher(teacher)}
              className={`p-2 cursor-pointer rounded-lg ${selectedTeacher?.id === teacher.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            >
              {teacher.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Section */}
      <div className="w-2/3 flex flex-col">
        {selectedTeacher ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-blue-500 text-white font-semibold">{selectedTeacher.name}</div>
            
            {/* Messages List */}
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.sender === 'parent' ? 'text-right' : 'text-left'}`}> 
                  <span className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'parent' ? 'bg-blue-400 text-white' : 'bg-gray-300 text-black'}`}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Message Input */}
            <div className="py-2 border-t flex bg-white bg">
              <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." className="flex-1 px-2 focus:outline-none" />
              <button onClick={sendMessage} className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Send</button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a teacher to start chatting
          </div>
        )}
      </div>
    </div>
  );
}