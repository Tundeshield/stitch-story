import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import * as ROUTES from '../assets/constants/routes';

export const AdminRoutes = () => {
  const admin = useSelector((state) => state.user.isAdmin);

  const [user] = useAuthState(auth);
  console.log(admin, user);
  return admin ? <Outlet /> : <Navigate to={ROUTES.LANDING} />;
};

export const ClientRoutes = () => {
  const admin = useSelector((state) => state.user.isAdmin);
  const [user] = useAuthState(auth);
  return user ? <Outlet /> : <Navigate to={ROUTES.LANDING} />;
};
