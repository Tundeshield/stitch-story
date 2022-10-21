import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import * as ROUTES from '../assets/constants/routes';
import LogIn from '../pages/Login';

export const AdminRoutes = () => {
  const admin = useSelector((state) => state.user.isAdmin);
  const [user] = useAuthState(auth);

  return user && admin ? <Outlet /> : <Navigate to={<LogIn />} />;
};

export const UserRoutes = () => {
  const [user] = useAuthState(auth);
  return user ? <Outlet /> : <Navigate to={<LogIn />} />;
};

// if user is admin and homepage is clicked, redirect to projects
export const LoggedInClaim = () => {
  const admin = useSelector((state) => state.user.isAdmin);
  const [user] = useAuthState(auth);


  
};

// if user is not admin and homepage is clicked, redirect to myprojects
