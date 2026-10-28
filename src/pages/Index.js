import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main description="Zihan Lin — Agent applications, robotics software, and computer vision.">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Zihan Lin</h2>
          <p>Agent applications · Robotics software · Computer vision</p>
        </div>
      </header>
      <p>
        I build software that connects model capabilities with practical tools and explicit state.
        My work spans a QQ Agent, robot task control, RGB-D reconstruction,
        and computational imaging.
      </p>
      <p>
        I studied Computer Graphics, Vision and Imaging at UCL and submitted my MSc dissertation
        in 2026. My undergraduate background is in robotics and electronic
        and electrical engineering
        through the SCUT–University of Birmingham 2+2 program.
      </p>
      <p>I am exploring opportunities in Agent application development and robotics software.</p>
      <ul className="actions">
        <li><Link to="/projects" className="button">View projects</Link></li>
      </ul>
    </article>
    <article className="post" id="featured-project">
      <header>
        <div className="title">
          <h2><Link to="/projects#qq-agent">QQ Agent</Link></h2>
          <p>Persistent notes, a D&amp;D game master, and reusable stickers</p>
        </div>
      </header>
      <p>
        Built on deepseek-harness and an existing QQ plugin, this project combines BM25 note
        retrieval, structured tools, persistent game state, and explicit player controls.
        It explores how conversational models can work with application rules and user feedback.
      </p>
      <p><Link to="/projects#qq-agent">Explore the implementation and my contributions</Link></p>
    </article>
  </Main>
);

export default Index;
