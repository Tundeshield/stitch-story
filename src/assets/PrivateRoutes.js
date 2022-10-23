import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

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
