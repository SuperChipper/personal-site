import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import projects from '../data/projects';

const { PUBLIC_URL } = process.env;

const areas = [
  {
    title: 'Robotics & 3D vision',
    text: 'Robot task control, serial communication, RGB-D reconstruction, and point-cloud registration.',
  },
  {
    title: 'Graphics',
    text: 'GLSL ray and path tracing, geometry processing, and Unity VR game logic.',
  },
  {
    title: 'Agent applications',
    text: 'Tool calling, retrieval, and persistent game state for a QQ-based AI game master.',
  },
];

const Index = () => (
  <Main fullPage description="Zihan Lin — robotics software, 3D vision, graphics, and Agent applications.">
    <section className="hero">
      <img className="hero-avatar" src={`${PUBLIC_URL}/images/me.jpg`} alt="Zihan Lin" />
      <div className="hero-text">
        <p className="eyebrow">Robotics software · 3D vision · Graphics · Agent applications</p>
        <h1>
          Zihan Lin <span className="name-zh" lang="zh-CN">林梓涵</span>
        </h1>
        <p className="hero-lead">
          I build software that connects perception, geometry, and models with explicit state —
          from robot task control and RGB-D reconstruction to GPU path tracing
          and an AI game master for QQ.
        </p>
        <p className="hero-sub">
          MSc Computer Graphics, Vision and Imaging, UCL — Distinction (average 77.46/100) ·
          First-Class Honours in Electronic and Electrical Engineering, University of Birmingham ·
          SCUT–UoB 2+2 program
        </p>
        <ul className="hero-actions">
          <li><Link to="/projects" className="button primary">View projects</Link></li>
          <li><a href={`${PUBLIC_URL}/resume-en.pdf`} className="button">Resume (PDF)</a></li>
          <li>
            <a href="https://github.com/SuperChipper" className="button ghost">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
          <li>
            <a href="mailto:zzzhlin@gmail.com" className="button ghost">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section className="home-section">
      <header className="section-head">
        <h2>Featured projects</h2>
        <Link to="/projects">All projects →</Link>
      </header>
      <div className="project-grid three">
        {projects.filter((p) => p.featured).map((p) => (
          <Cell data={p} key={p.id} compact />
        ))}
      </div>
    </section>

    <section className="home-section">
      <header className="section-head">
        <h2>What I work on</h2>
      </header>
      <div className="area-grid">
        {areas.map((a) => (
          <div className="area-card" key={a.title}>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
          </div>
        ))}
      </div>
    </section>

    <footer className="home-footer">
      <p>
        &copy; Zihan Lin · <Link to="/about">About</Link> · <Link to="/resume">Resume</Link>
      </p>
    </footer>
  </Main>
);

export default Index;
