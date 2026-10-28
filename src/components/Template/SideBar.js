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
        <a href="mailto:1625703948@qq.com">1625703948@qq.com</a>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Zihan. I work on Agent applications, robotics software, and computer vision.
        My background spans UCL, the University of Birmingham, and SCUT.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Zihan Lin. Template by <a href="https://mldangelo.com">Michael D&apos;Angelo</a>.</p>
    </section>
    <section id="map">
      <a href="https://mapmyvisitors.com/web/1bwzw" title="Visit tracker"><img src="https://mapmyvisitors.com/map.png?cl=ffffff&w=a&t=n&d=ORFxIedg7dTKhbfBoYhUHogrV5V11adS7q0BKXGAbM0" alt="Map showing visitor data" /></a>
    </section>
  </section>
);

export default SideBar;
