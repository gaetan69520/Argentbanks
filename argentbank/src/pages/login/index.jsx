import React, { useState } from "react";
import {useNavigate } from "react-router-dom"; 
import "../../css/app.css";
import { useDispatch } from 'react-redux'; 
import { setToken } from '../../slice/index';
import Header from "../../composants/Header";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Utilise useNavigate pour la redirection
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  
  const handleLogin = async () => {
    try {
      // Effectue l'appel API pour la connexion en envoyant les données d'authentification
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        const token = responseData.body.token;
  

        // Stocke le jeton d'authentification dans le store Redux
        dispatch(setToken(token));
        // Redirige l'utilisateur vers la page utilisateur
        navigate("/user"); // Utilise navigate pour la redirection
      } else {
        // Gére le cas où l'authentification a échoué 
        setError("Echec d'authentification.");
      }
    } catch (error) {
      // Gére les erreurs possibles, par exemple, les erreurs réseau
      setError("Error.");
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Header/>
      <main className="main-user bg-dark-user">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          {error && <p className="error-message">{error}</p>}
          <form>
          <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input type="email" id="email" name="email" onChange={handleChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" onChange={handleChange} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="button" className="sign-in-button" onClick={handleLogin}>
              Sign In
            </button>
          </form>
        </section>
      </main>
      </div>
  );
}

export default Login;