import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Zihan Lin</h2>
        <a href="zxl408@student.bham.ac.uk">zxl408@student.bham.ac.uk</a>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Zihan. I am a <a href="https://www.birmingham.ac.uk/schools/engineering/eese">UoB EESE</a> undergraduate, currently in 2+2 program with SCUT Robotics
        {' '}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; MICHAEL D&apos;ANGELO <Link to="https://mldangelo.com">https://mldangelo.com</Link>.</p>
    </section>
    <body>
      <script type="text/javascript" id="mapmyvisitors" src="https://mapmyvisitors.com/map.js?cl=ffffff&w=a&t=n&d=ORFxIedg7dTKhbfBoYhUHogrV5V11adS7q0BKXGAbM0&cmo=d67979&cmn=45c687" />
    </body>
  </section>
);

export default SideBar;
