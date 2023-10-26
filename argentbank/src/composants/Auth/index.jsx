import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../slice/index';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const token = useSelector(selectToken);

  if (!token) {
    // L'utilisateur n'est pas authentifié, redirige vers la page de connexion
    return <Navigate to="/login" />;
  }

  // L'utilisateur est authentifié, permet l'accès à la page "User"
  return children;
};

export default AuthGuard;