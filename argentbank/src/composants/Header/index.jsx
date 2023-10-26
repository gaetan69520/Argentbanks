import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { logoutToken } from '../../slice/index'; 
import "../../css/app.css";
import 'font-awesome/css/font-awesome.min.css';

const Header = ({ isUserPage, username , firstName }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Lorsque l'utilisateur clique sur "Sign Out", déclenche l'action de déconnexion
    dispatch(logoutToken());
  };
  const displayUsername = username || firstName; 
  
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className='nav'>
        {isUserPage ? (
          <Link to="/user" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {displayUsername}
          </Link>
        ) : (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
        {isUserPage && (
          <Link to="/" className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;