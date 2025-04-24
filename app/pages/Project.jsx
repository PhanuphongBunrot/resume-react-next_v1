"use client";

import React, { useState } from 'react';


function Project() {
  const projects = [

    { name: '', 
      details: 'Contributed to the development of a web-based controller for monitoring routers at various checkpoints, utilizing Laravel for the backend, MongoDB for data storage, and Vue.js for the frontend interface.' ,
      image: '/logos/modern.jpeg'
    },
    { name: '', 
      details: 'Contributed to web application development by resolving bugs and implementing new features using CodeIgniter for both backend and frontend, with SQL Server as the database system.' ,
      image: '/logos/wex-1.png'
    },
    { name: 'Task Management App', 
      details: 'Contributed to the development of a web application by debugging issues and adding new functionalities, utilizing Laravel for both backend and frontend, and SQL Server as the database.',
     image: '/logos/wex-2.png'
    },
    { name: 'Task Management App', 
      details: 'Contributed to web application development by resolving bugs and implementing new features, utilizing NestJS for the backend, Nuxt.js for the frontend, and SQL Server as the database system.',
     image: '/logos/wex-3.png'
    },
   
    { name: 'Portfolio Website',  
      details: 'Planned and implemented the web architecture and data modeling using Laravel for both backend and frontend development, with MySQL as the database system.' ,
      image: '/logos/expup-2.png'
    },
    { name: 'Portfolio Website',  
      details: 'Planned and structured the web architecture and database design using Next.js for both backend and frontend development, and MySQL as the relational database.' ,
      image: '/logos/expup-3.png'
    },
  ];

  const [flipped, setFlipped] = useState(null);

  const toggleFlip = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section className="p-9">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">Project</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card project-card-size ${flipped === index ? 'flipped' : ''}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="project-card-inner">
              <div className="project-card-front">
              <img src={project.image} alt={project.name}  className="w-full h-full object-cover rounded-md"/>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="project-card-back">
                <p className="text-gray-800">{project.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
