import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Zihan Lin's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link> {' '}

      </p>
    </article>
    <article className="post" id="i1">
      <header>
        <div className="title">
          <h2><Link to="/">News</Link></h2>
          <p>
            my recent activities.
          </p>
        </div>
      </header>
      <p>
        <li>I am currently looking for a summer research internship.
        </li>
      </p>
      <p>
        <li>
          Sep 18th, 2023, I went to University of Birmingham for
          my rest 2 years of undergraduate study.
        </li>
      </p>
    </article>
  </Main>
);

export default Index;
