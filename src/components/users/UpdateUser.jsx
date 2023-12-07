import React, { useState } from 'react';

const UpdateUserForm = ({ userId }) => {
  const [userData, setUserData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [updateResponse, setUpdateResponse] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/updateUser/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setUpdateResponse('Actualización exitosa.');
      } else {
        setUpdateResponse('Error en la actualización.');
      }
    } catch (error) {
      console.error('Error en la solicitud PUT:', error);
    }
  };

  return (
    <div>
      <h2>Actualizar Usuario</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleUpdate}>
          Actualizar Usuario
        </button>
      </form>
      <div>
        <p>{updateResponse}</p>
      </div>
    </div>
  );
};

export default UpdateUserForm;
