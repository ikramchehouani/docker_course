import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Message from './Message';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route to display the Message component */}
          <Route path="/message" element={<Message/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
