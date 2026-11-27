import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ skills, categories }) => (
  <section className="skills">
    <div className="link-to" id="skills" />
    <div className="title">
      <h3>Skills</h3>
      <p>Technologies and methods used in my projects.</p>
    </div>
    {categories.map(({ name }) => (
      <div className="skill-group" key={name}>
        <h4>{name}</h4>
        <ul className="tags">
          {skills.filter((skill) => skill.category.includes(name))
            .flatMap((skill) => skill.title.split(' / '))
            .map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    ))}
  </section>
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Skills;
