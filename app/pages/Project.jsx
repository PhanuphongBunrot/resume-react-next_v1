import React from 'react';

function Project() {
  const projects = [
    { name: 'E-commerce Website', description: 'Built with Vue.js and Laravel' },
    { name: 'Task Management App', description: 'Developed using Nuxt.js and NestJS' },
    { name: 'Portfolio Website', description: 'Created using React and Tailwind CSS' },
  ];

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-4 space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
