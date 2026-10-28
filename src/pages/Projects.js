import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Zihan Lin's projects in Agent applications, robotics, and image reconstruction."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
          <p>Agent applications, robotics software, and computational imaging</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
