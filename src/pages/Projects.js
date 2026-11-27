import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data, { categories } from '../data/projects';

const Projects = () => {
  const [active, setActive] = useState('all');
  const visible = active === 'all' ? data : data.filter((p) => p.category === active);
  const available = categories.filter((c) => c.key === 'all' || data.some((p) => p.category === c.key));

  return (
    <Main
      title="Projects"
      description="Zihan Lin's projects in robotics, 3D vision, graphics, Agent applications, and image reconstruction."
    >
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2><Link to="/projects">Projects</Link></h2>
            <p>Robotics &amp; 3D vision, graphics, Agent applications, and computational imaging</p>
          </div>
        </header>
        <div className="filter-bar" role="group" aria-label="Filter projects by area">
          {available.map((c) => (
            <button
              type="button"
              key={c.key}
              className={`filter-chip${active === c.key ? ' active' : ''}`}
              aria-pressed={active === c.key}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {visible.map((project) => (
            <Cell data={project} key={project.id} />
          ))}
        </div>
      </article>
    </Main>
  );
};

export default Projects;
