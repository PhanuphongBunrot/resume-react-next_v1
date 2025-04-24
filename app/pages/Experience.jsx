"use client";

import React, { useState } from 'react';
import './styles.css'; // ใช้ CSS สำหรับ flip card

function Experience() {
  const projects = [
    {
      name: 'Modern Networks. November 2021 - November 2022. Full Stack Developer',
      description: '',
      details:
        'Developed the company website. Developed website controllers and REST APIs. Utilized Datatables, MongoDB, and MySQL.',
    },
    {
      name: 'Wellios. December 2022 - January 2025. Full Stack Developer',
      description: '',
      details:
        'Developed the company website. Implemented planned features and ensured they aligned with company objectives. Developed new features as required by the company. Created APIs to send data to applications. Generated various reports for users. Created, deleted, and modified databases.',
    },
    {
      name: 'EXP UP. February 2025 - April 2025. Senior Full-Stack Developer (Contract Position)',
      description: '',
      details:
        'Designing and developing both front-end and back-end architecture for a game top-up website using PHP and Laravel, ensuring security, scalability, and efficient transaction management. Developing a CMS using React and Next.js optimized for SEO. Integrating SEO validation tools to ensure best practices. Developing and integrating REST APIs to connect Laravel backend with game SDK. Designing MySQL database from scratch. Coordinating internal and external teams. Planning and managing website architecture.',
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
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') toggleFlip(index);
            }}
          >
            <div className="card-inner">
              <div className="card-front p-4 border rounded-lg shadow-lg bg-white">
                <h3 className="text-xl font-semibold">
                  {project.name.split('. ').map((line, i) => (
                    <div key={i}>{line.trim()}</div>
                  ))}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="card-back w-full p-4 border rounded-lg shadow-lg bg-white text-left">
              <div className="text-gray-800">
                  <ul className="list-disc pl-4">
                    {project.details.split('. ').map((line, i) => (
                      <li key={i} className="mb-2">
                        {line.trim()}
                        {line.endsWith('.') ? '' : '.'}
                      </li>
                    ))}
                  </ul>
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
