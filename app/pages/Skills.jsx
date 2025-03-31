import React from 'react';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'PHP', logo: '/logos/php.png' },
      { name: 'JavaScript', logo: '/logos/javascript.png' },
      { name: 'Vue.js', logo: '/logos/vuejs.png' },
      { name: 'CSS', logo: '/logos/css3.png' },
      { name: 'HTML', logo: '/logos/html5.png' },
      { name: 'Node.js', logo: '/logos/nodejs.png' },
      { name: 'TypeScript', logo: '/logos/typescript.png' },
      { name: 'SQL', logo: '/logos/sql.png' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'CodeIgniter', logo: '/logos/codeigniter.png' },
      { name: 'Nuxt.js', logo: '/logos/nuxtjs.png' },
      { name: 'Laravel', logo: '/logos/laravel.png' },
      { name: 'NestJS', logo: '/logos/nestjs.png' },
      { name: 'Next.js', logo: '/logos/nextjs.png' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'SQL Server', logo: '/logos/sql.png' },
      { name: 'MongoDB', logo: '/logos/mongodb.png' },
      { name: 'MySQL', logo: '/logos/mysql.png' },
    ],
  },
  {
    category: 'Other',
    skills: [
      { name: 'REST API', logo: '/logos/restapi.png' },
      { name: 'GitHub', logo: '/logos/github.png' },
      { name: 'GitLab', logo: '/logos/gitlab.png' },
    ],
  },
];

function Skills() {
  return (
    <section className="p-8 rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">Skills</h2>
      {skillsData.map((group, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-400 pb-2">{group.category}</h3>
          <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {group.skills.map((skill, idx) => (
              <li key={idx} className="flex items-center gap-3 text-lg bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition">
                <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" />
                <span className="text-gray-800 font-medium">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
