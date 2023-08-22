import React from 'react';
import axios from 'axios';

const Projects = () => {

  const projects = [
    { title: 'Create an Online Photo Editor Using React', link: 'https://www.educative.io/projects/create-an-online-photo-editor-using-react' },
    { title: 'Build a Stock Market App Using React and Chart.js', link: 'https://www.educative.io/collection/page/10370001/5089245029203968/4756844222611456/project' },
    { title: 'Build a Personal Portfolio Using React', link: 'https://www.educative.io/collection/page/10370001/5038933566291968/5243380317814784/project' },
    { title: 'Build a Memory Game Using React', link: 'https://www.educative.io/collection/page/10370001/4729076288061440/6341444310925312/project' }
  ];

  return (
    <section>
      <h2>Projects</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

