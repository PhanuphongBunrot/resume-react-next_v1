"use client";


import React, { useState } from 'react';
import './styles.css'; // คุณต้องเพิ่มไฟล์ CSS นี้
  
function Experience() {
  const projects = [
    { name: 'E-commerce Website', description: 'Built with Vue.js and Laravel', details: 'An online store with full e-commerce functionality like product management, cart system, and payment integration.' },
    { name: 'Task Management App', description: 'Developed using Nuxt.js and NestJS', details: 'A task management app that allows users to create, manage, and track their tasks in an easy-to-use interface.' },
    { name: 'Portfolio Website', description: 'Created using React and Tailwind CSS', details: 'A personal portfolio showcasing projects and skills with a clean and responsive design.' },
  ];

  const [flipped, setFlipped] = useState(null);

  const toggleFlip = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section className="p-6">
       <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">Experience</h2>
    
      <div className="mt-4 space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${flipped === index ? 'flipped' : ''}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="card-inner">
              <div className="card-front p-4 border rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="card-back p-4 border rounded-lg shadow-lg">
                <p className="text-gray-800">{project.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
