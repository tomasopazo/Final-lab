import React from 'react';
import { Menubar } from 'primereact/menubar';
import { NavLink, useNavigate } from 'react-router-dom';


const handleLogout = (navigate) => {
  localStorage.removeItem('isLoggedIn');
  setLoggedIn(false);
  navigate('/login');
};

export default function NavBar({ isLoggedIn, handleLogout }) {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => navigate('/home')
    },
    {
      label: 'Tabla Usuarios',
      icon: 'pi pi-book',
      command: () => navigate('/usertable')
    },
    {
      label: 'Tabla Publicaciones',
      icon: 'pi pi-book',
      command: () => navigate('/posttable')
    },
    {
      label: 'Cerrar Sesión',
      icon: 'pi pi-power-off',
      command: () => handleLogout(navigate),
      visible: isLoggedIn

    }
  ];

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  );
}
