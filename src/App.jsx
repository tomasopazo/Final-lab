import React, {useState} from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import UserTablePage from './components/Pages/UserTablePage';
import PostTablePage from './components/Pages/PostTablePage';
import HomePage from './components/Pages/HomePage';
import NavBar from './components/NavBar';
import Login from './components/Pages/logIn';
import './index.css'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";




function App() {
const [isLoggedIn, setLoggedIn] = useState(false);

const handleLogout = (navigate) => {
  localStorage.removeItem('isLoggedIn');
  setLoggedIn(false);
  navigate('/login');
};

  return (
    <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn} handleLogout={() => handleLogout()}  />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" />} // Puedes redirigir a la página de inicio de sesión por defecto
        />
        <Route
          path="/login"
          element={<Login />} // Asegúrate de tener un componente para la página de inicio de sesión
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/posttable" element={<PostTablePage />} />
        <Route path="/usertable" element={<UserTablePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

