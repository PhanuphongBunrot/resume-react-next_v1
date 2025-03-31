import React from 'react';

function Profile() {
  return (
    <section className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <div className="w-50 h-50 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
         <img src="S__37920772.jpg" alt="Profile" className="w-full h-full rounded-full" />
         
        </div>
        <h2 className="text-3xl font-bold text-blue-600">Profile</h2>
        <p className="text-lg mt-2 text-gray-700 max-w-md">
          Hello! I'm a Full Stack Developer with experience in Vue, Nuxt, PHP, and Node.js.
        </p>
      </div>
    </section>
  );
}

export default Profile;