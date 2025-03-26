import React from 'react';

function Skills() {
  const skills = ['JavaScript', 'Vue.js', 'Nuxt.js', 'Node.js', 'NestJS', 'PHP', 'Laravel', 'MySQL', 'MongoDB'];

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold">Skills</h2>
      <ul className="mt-2 list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
