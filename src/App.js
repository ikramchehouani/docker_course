import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Message from './Message';

function App() {
  return (
    <Router>
      <div className="App">
          {/* Route to display the Message component */}
          <Route path="/message">
            <Message />
          </Route>
          {/* Other routes */}
      </div>
    </Router>
  );
}

export default App;
