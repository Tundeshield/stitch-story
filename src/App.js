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
import People from './pages/People';
import Task from './pages/Task/Task';
import NotFoundPage from './pages/NotFoundPage';
import CreateUser from './pages/User/CreateUser';
import ViewUsers from './pages/User/ViewUsers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/view-users" element={<ViewUsers />} />
        <Route path="/projects/:projectID" element={<Project />} />
        <Route path="/projects/:projectID/:taskID" element={<Task />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
export default App;
