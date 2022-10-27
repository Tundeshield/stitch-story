import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import CreateProject from './pages/Project/CreateProject';
import Projects from './pages/Project/Projects';
import Project from './pages/Project/Project';

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
import EditTask from './pages/Task/EditTask';
import Register from './pages/User/Register';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './utils/firebase';
import UpdateUser from './pages/User/UpdateUser';
import CreateTask from './pages/Task/CreateTask';
import ClientChat from './pages/clientChat/ClientChat';

import StaffConfirmationPage from './pages/staff/StaffConfirmationPage';
import StaffRegistrationPage from './pages/staff/StaffRegistrationPage';
import StaffTasks from './pages/staff/StaffTasks';

function App() {
  const admin = useSelector((state) => state.user.isAdmin);
  const isSupervisor = useSelector(
    (state) => state.supervisorConfirmed.isSupervisor,
  );
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/orders" /> : <Login />}
        />
        <Route path={ROUTE.NOTFOUND} element={<NotFoundPage />} />
        <Route path={ROUTE.RESETPASSWORD} element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/projects"
          element={admin ? <Projects /> : <Navigate to="/" />}
        />
        <Route
          path="/projects/create"
          element={
            !admin ? <Navigate to={ROUTE.NOTFOUND} /> : <CreateProject />
          }
        />
        <Route
          path="/users"
          element={!admin ? <Navigate to={ROUTE.NOTFOUND} /> : <ViewUsers />}
        />
        <Route
          path="/users/create-user"
          element={!admin ? <Navigate to={ROUTE.NOTFOUND} /> : <CreateUser />}
        />
        <Route
          path="/users/update/:id"
          element={!user ? <Navigate to={ROUTE.NOTFOUND} /> : <UpdateUser />}
        />

        <Route
          path="/projects/:id"
          element={
            !admin || !isSupervisor ? (
              <Navigate to={ROUTE.NOTFOUND} />
            ) : (
              <Project />
            )
          }
        />
        <Route
          path="/users/:id"
          element={!admin ? <Navigate to={ROUTE.NOTFOUND} /> : <ViewUser />}
        />
        <Route
          path="/staff/secret-registration"
          element={
            !isSupervisor ? (
              <Navigate to={ROUTE.NOTFOUND} />
            ) : (
              <StaffRegistrationPage />
            )
          }
        />
        <Route
          path="/staff/staff-tasks"
          element={user ? <StaffTasks /> : null}
        />
        <Route path="/StaffConfirmation" element={<StaffConfirmationPage />} />

        <Route
          path="/tasks/create/:id"
          element={!admin ? <Navigate to={ROUTE.NOTFOUND} /> : <CreateTask />}
        />
        <Route
          path="/client/chat/:id"
          element={!user ? <Navigate to={ROUTE.NOTFOUND} /> : <ClientChat />}
        />
        <Route
          path="/tasks/edit/:id"
          element={!admin ? <Navigate to={ROUTE.NOTFOUND} /> : <EditTask />}
        />
        <Route
          path="/tasks/:id"
          element={admin ? <Task /> : <Navigate to={ROUTE.NOTFOUND} />}
        />
        <Route
          path="/orders"
          element={user ? <MyProjects /> : <Navigate to="/" />}
        />
        <Route
          path="/orders/:id"
          element={!user ? <Navigate to="/" /> : <TrackOrder />}
        />
      </Routes>
    </Router>
  );
}
export default App;
