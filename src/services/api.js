

// export async function getUsers() {
//   const resp = await fetch('http://localhost:3000/api/user/getUsers');
//   return resp.json();
// }


// export async function getPosts() {
//   const resp = await fetch('http://localhost:3000/api/post/posts');
//   return resp.json();
// }


import axios from 'axios';

export async function getUsers() {
  try {
    const response = await axios.get('http://localhost:3000/api/user/getUsers');
    return response.data;
  } catch (error) {
    // Manejar el error, por ejemplo, lanzando una excepción o devolviendo un valor predeterminado
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
}

export async function getPosts() {
  try {
    const response = await axios.get('http://localhost:3000/api/post/posts');
    return response.data;
  } catch (error) {
    // Manejar el error, por ejemplo, lanzando una excepción o devolviendo un valor predeterminado
    console.error('Error al obtener publicaciones:', error);
    throw error;
  }
}
