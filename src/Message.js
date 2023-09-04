import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Message() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Make an API request to get the message
    axios.get('/api/get-message')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Hello from Database:</h1>
      <p>{message}</p>
    </div>
  );
}

export default Message;
