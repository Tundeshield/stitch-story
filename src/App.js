import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Login from './pages/Login';
import CreateProject from './pages/Project/CreateProject';
import Projects from './pages/Project/Projects';
import Project from './pages/Project/Project';
import Task from './pages/Task/Task';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectID" element={<Project />} />
        <Route path="/projects/:projectID/:taskID" element={<Task />} />
      </Routes>
    </Router>
  );
}
export default App;
