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
import ViewUser from './pages/User/ViewUser';
import MyProjects from './pages/client/MyProjects';
import TrackOrder from './pages/client/TrackOrder';
import * as ROUTE from './assets/constants/routes';
import ResetPassword from './pages/ResetPassword';
import { AdminRoutes, UserRoutes } from './assets/PrivateRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={ROUTE.NOTFOUND} element={<NotFoundPage />} />
        <Route path={ROUTE.RESETPASSWORD} element={<ResetPassword />} />

        <Route element={<AdminRoutes />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/create" element={<CreateProject />} />
          <Route path="/users" element={<ViewUsers />} />
        </Route>

        <Route element={<UserRoutes />}>
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/users/:id" element={<ViewUser />} />
          <Route path="/tasks" />
          <Route path="/tasks/:id" element={<Task />} />
          <Route path="/orders" element={<MyProjects />} />
          <Route path="/orders/:id" element={<TrackOrder />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
