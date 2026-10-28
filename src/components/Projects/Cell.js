import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <article className="mini-post project-card" id={data.id}>
    <header>
      <h3>{data.title}</h3>
      <p className="project-meta">{data.subtitle}</p>
    </header>
    <div className="project-content">
      <p>{data.desc}</p>
      <ul>
        {data.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>
      {data.boundary && <p className="project-scope">{data.boundary}</p>}
    </div>
  </article>
);

Cell.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    boundary: PropTypes.string,
  }).isRequired,
};

export default Cell;
