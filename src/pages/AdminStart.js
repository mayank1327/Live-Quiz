import React from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

// Establish connection to the server via Socket.IO
const socket = io('http://localhost:8080');

const AdminStart = () => {
  const navigate = useNavigate();

  // Function to start the quiz
  const startQuiz = () => {
    // Emit the 'startQuiz' event to notify server that the quiz should start
    socket.emit('startQuiz');
    alert('Quiz has been started!');

    // Navigate to the main quiz page after starting the quiz
    navigate('/'); // Ensure the route leads to your quiz page
  };

  return (
    <div className="admin-start flex-col justify-center ">
      <h2 className='text-white self-center'>Admin Control Panel</h2>
      <button className='self-center' onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default AdminStart;



