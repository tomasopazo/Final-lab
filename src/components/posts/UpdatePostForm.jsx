import React, { useState } from 'react';

function UpdatePostForm  ({ postId })  {
  const [postData, setPostData] = useState({
    fecha: '',
    descripcion: '',
    imagen: '',
    hora: '',
    ubicacion: '',
    userId: '',
  });

  const [updateResponse, setUpdateResponse] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/post/updatePost/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
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
      <h2>Actualizar Publicación</h2>
      <form>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={postData.fecha}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            name="descripcion"
            value={postData.descripcion}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            name="imagen"
            value={postData.imagen}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Hora:</label>
          <input
            type="time"
            name="hora"
            value={postData.hora}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Ubicación:</label>
          <input
            type="text"
            name="ubicacion"
            value={postData.ubicacion}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={postData.userId}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleUpdate}>
          Actualizar Publicación
        </button>
      </form>
      <div>
        <p>{updateResponse}</p>
      </div>
    </div>
  );
};

export default UpdatePostForm;
