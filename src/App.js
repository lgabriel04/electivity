// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import statement
import './App.css';
import Nav from './nav';
import Scan from './scan';
import Memes from './memes_page';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Scan />} />
          <Route path="/memes" element={<Memes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
