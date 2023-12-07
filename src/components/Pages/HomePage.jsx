import React from 'react';
import UserLoginForm from '../users/FormUser'
import PostForm from '../posts/FormPost';

function HomePage() {
return (
  <>
    <div className=" bg-gray-400 flex flex-col md:flex-row items-center justify-center h-screen p-4">
      <div className="flex flex-col md:flex-row space-x-4"></div>
      <UserLoginForm />
      <PostForm />
    </div>
  </>
);
}

export default HomePage;
