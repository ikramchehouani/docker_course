import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Message() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get('/api/get-message')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error when requesting message:", error);
      });
  }, []);
  
  return (
    <div>
      <h1>Message from Database:</h1>
      <p>{message}</p>
    </div>
  );
}

export default Message;
