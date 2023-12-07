import React, { useState, useEffect } from 'react';
import { getPosts } from '../services/api';

export default function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return posts;
}
