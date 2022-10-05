import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/dashboard/:userid" element={<Dashboard />} />
          <Route path="/dashboard/:userid/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
