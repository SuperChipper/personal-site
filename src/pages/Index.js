import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
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
      <h4>Present</h4>
      <p>
        <li>I am currently looking for a PhD/Mphil oppotunity.
        </li>
      </p>

      <p>
        <h4>{dayjs('2024-7-13').format('MMMM YYYY')}</h4>
        <li>Successfully won the first prize in National robotic competition Robocon 2024!
        </li>
      </p>
      <p>
        <h4>{dayjs('2023-9-18').format('MMMM YYYY')}</h4>
        <li>I went to University of Birmingham for
          my rest 2 years of undergraduate study.
        </li>
      </p>
    </article>
  </Main>
);

export default Index;
