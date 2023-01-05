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
import ProductionAdmin from './pages/staff/ProductionAdmin';
import ContactPage from './pages/ContactPage';

function App() {
  const user = useSelector((state) => state.user);
  const loggedInUser = useAuthState(auth);
  const isSupervisor = useSelector(
    (state) => state.supervisorConfirmed.isSupervisor,
  );

  return (
    <Router>
      <Routes>
        {/* General Routes*/}
        <Route path={ROUTE.LANDING} element={<Login />} />
        <Route path={ROUTE.NOTFOUND} element={<NotFoundPage />} />
        <Route path={ROUTE.RESETPASSWORD} element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/StaffConfirmation" element={<StaffConfirmationPage />} />
        <Route path="/get-help-quick-faq" element={<ContactPage />} />

        <Route
          path="/staff/secret-registration"
          element={
            isSupervisor ? (
              <StaffRegistrationPage />
            ) : (
              <Navigate to={ROUTE.NOTFOUND} />
            )
          }
        />

        <Route
          path="/admin"
          element={
            isSupervisor ? (
              <ProductionAdmin />
            ) : (
              <Navigate to={ROUTE.NOTFOUND} />
            )
          }
        />

        {/* Admin Routes*/}
        <Route
          path="/projects"
          element={user.role === 'admin' ? <Projects /> : <Navigate to="/" />}
        />
        <Route
          path="/users/create-user"
          element={
            user.role === 'admin' ? (
              <CreateUser />
            ) : (
              <Navigate to={ROUTE.NOTFOUND} />
            )
          }
        />
        <Route
          path="/projects/create"
          element={
            user.role === 'admin' ? (
              <CreateProject />
            ) : (
              <Navigate to={ROUTE.NOTFOUND} />
            )
          }
        />
        <Route
          path="/users"
          element={
            user.role === 'admin' ? (
              <ViewUsers />
            ) : (
              <Navigate to={ROUTE.NOTFOUND} />
            )
          }
        />

        <Route
          path="/users/update/:id"
          element={
            loggedInUser ? <UpdateUser /> : <Navigate to={ROUTE.NOTFOUND} />
          }
        />

        <Route
          path="/projects/:id"
          element={
            user.role === 'admin' || user.role === 'supervisor' ? (
              <Project />
            ) : (
              <Navigate to={ROUTE.NOTFOUND} />
            )
          }
        />

        <Route
          path="/users/:id"
          element={
            user.role === 'admin' ? (
              <ViewUser />
            ) : (
              <Navigate to={ROUTE.NOTFOUND} />
            )
          }
        />
        <Route
          path="/tasks/create/:id"
          element={
            user.role === 'admin' ? (
              <CreateTask />
            ) : (
              <Navigate to={ROUTE.NOTFOUND} />
            )
          }
        />

        <Route
          path="/tasks/edit/:id"
          element={
            user.role === 'admin' ? (
              <EditTask />
            ) : (
              <Navigate to={ROUTE.NOTFOUND} />
            )
          }
        />

        <Route
          path="/tasks/:id"
          element={
            user.role === 'admin' ? <Task /> : <Navigate to={ROUTE.NOTFOUND} />
          }
        />

        {/* Supervisor Routes*/}

        <Route
          path="/staff/staff-tasks"
          element={
            user.role === 'supervisor' ? (
              <StaffTasks />
            ) : (
              <Navigate to={ROUTE.NOTFOUND} />
            )
          }
        />
        {/* Client Routes*/}
        <Route
          path="/client/chat/:id"
          element={
            user.role === 'client' ? (
              <ClientChat />
            ) : (
              <Navigate to={ROUTE.NOTFOUND} />
            )
          }
        />

        <Route
          path="/orders/:id"
          element={
            user.role === 'client' ? <TrackOrder /> : <Navigate to="/" />
          }
        />

        <Route
          path="/orders"
          element={
            user.role === 'client' ? <MyProjects /> : <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
