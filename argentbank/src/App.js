import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; 
import Footer from "./composants/Footer/index";
import Home from '../src/pages/home/index';
import Login from '../src/pages/login/index';
import User from '../src/pages/user/index';
import AuthGuard from './composants/Auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/user"
            element={
              <AuthGuard>
                <User />
              </AuthGuard>
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;