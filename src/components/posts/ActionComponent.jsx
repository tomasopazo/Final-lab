import React, { useState } from 'react';
import UpdatePostForm from '../posts/UpdatePostForm';

function ApiPostComponent({ postId }) {
  const [deleteResponse, setDeleteResponse] = useState('');
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleDelete = async () => {
    try {
      // Realizar solicitud DELETE a la API
      const response = await fetch(`http://localhost:3000/api/post/deletePost/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setDeleteResponse('Solicitud DELETE exitosa.');
      } else {
        setDeleteResponse('Error en la solicitud DELETE.');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud DELETE:', error);
    }
  };
  
  
  const handleUpdateClick = () => {
    // Mostrar el formulario de actualización al hacer clic en el botón
    setShowUpdateForm(true);
  };

  return (
    <div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleUpdateClick}
      >
        ACTUALIZAR
      </button>
      <button
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDelete}
      >
        ELIMINAR
      </button>

      <div>
        <p>{deleteResponse}</p>
        <p> {showUpdateForm && <UpdatePostForm postId={postId} />}</p>
      </div>
    </div>
  );
};

export default ApiPostComponent;
