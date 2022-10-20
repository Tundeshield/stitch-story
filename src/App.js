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

function App() {
  return (
    <Router>
      <Routes>
        {/* General Routes */}
        <Route path={ROUTE.LANDING} element={<Login />} />
        <Route path={ROUTE.NOTFOUND} element={<NotFoundPage />} />
        <Route path={ROUTE.RESETPASSWORD} element={<ResetPassword />} />

        {/* Admin Routes */}
        <Route path={ROUTE.CREATEPROJECT} element={<CreateProject />} />
        <Route path={ROUTE.PROJECTS} element={<Projects />} />
        <Route path={`${ROUTE.PROJECTS}/:pid`} element={<Project />} />
        <Route path={ROUTE.CREATEUSER} element={<CreateUser />} />
        <Route path={ROUTE.USERS} element={<ViewUsers />} />
        <Route path={`${ROUTE.USERS}/:uid`} element={<ViewUser />} />

        {/* Customer Routes */}

        <Route path={`${ROUTE.TASKS}/:tid`} element={<Task />} />
        <Route path={`${ROUTE.CLIENTS}/projects`} element={<MyProjects />} />
        {/* <Route
          path={`${ROUTE.CLIENTS}/:uid/projects`}
          element={<MyProjects />}
        /> */}
        <Route
          path={`${ROUTE.CLIENTS}/projects/track/:pid`}
          element={<TrackOrder />}
        />
        {/* <Route
          path={`${ROUTE.CLIENTS}/:uid/projects/track/:pid`}
          element={<TrackOrder />}
        /> */}
      </Routes>
    </Router>
  );
}
export default App;
