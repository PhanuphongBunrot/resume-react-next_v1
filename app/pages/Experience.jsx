"use client";

import React, { useState } from 'react';
import './styles.css'; // เพิ่ม CSS สำหรับเอฟเฟกต์ flip

function Experience() {
  const projects = [
    {
      name: 'Modern Networks. November 2021 - November 2022.  Full Stack Developer.',
      description: '',
      details:
        'Developed the company website. Developed website controllers and REST APIs. Utilized Datatables, MongoDB, and MySQL.',
    },
    {
      name: 'Wellios. December 2022 - January 2025. Full Stack Developer.',
      description: '',
      details:
        'Developed the company website.  Implemented planned features and ensured.  they aligned with company objectives. Developed new features as required by the company. Created APis to send data to applications. Generated various reports for users. Created, deleted, and modified databases.',
    },
    {
      name: 'Portfolio Website',
      description: 'Created using React and Tailwind CSS',
      details:
        'A personal portfolio showcasing projects and skills with a clean and responsive design.',
    },
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
              <div className="card-front p-4 border rounded-lg shadow-lg bg-white">
                <h3 className="text-xl font-semibold">{project.name.split('. ').map((line, i) => (
                    <p key={i}>
                      {line.trim()}
                      {line.endsWith('.') ? '' : '.'}
                    </p>
                  ))}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="card-back p-4 border rounded-lg shadow-lg bg-white">
                <div className="text-gray-800">
                  {project.details.split('. ').map((line, i) => (
                    <p key={i}>
                      {line.trim()}
                      {line.endsWith('.') ? '' : '.'}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
