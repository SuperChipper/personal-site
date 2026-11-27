import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env;
const asset = (path) => `${PUBLIC_URL}${path}`;

const Media = ({ item }) => {
  let content;
  if (item.type === 'bilibili') {
    content = (
      <div className="embed-16x9">
        <iframe
          src={`https://player.bilibili.com/player.html?bvid=${item.src}&autoplay=0&high_quality=1`}
          title={item.caption || 'Bilibili video'}
          loading="lazy"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
        />
      </div>
    );
  } else if (item.type === 'video') {
    content = (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video controls playsInline preload="none" poster={item.poster && asset(item.poster)}>
        <source src={asset(item.src)} type="video/mp4" />
      </video>
    );
  } else {
    content = <img src={asset(item.src)} alt={item.caption} loading="lazy" />;
  }
  return (
    <figure className={`project-media${item.portrait ? ' portrait' : ''}`}>
      {content}
      {item.caption && <figcaption>{item.caption}</figcaption>}
    </figure>
  );
};

Media.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.oneOf(['image', 'video', 'bilibili']).isRequired,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string,
    caption: PropTypes.string,
    portrait: PropTypes.bool,
  }).isRequired,
};

const Cell = ({ data, compact }) => {
  const links = (data.links || []).filter((l) => l.url);
  const cover = data.image && (
    <div className="project-cover">
      <img src={asset(data.image)} alt={data.imageAlt || data.title} loading="lazy" />
    </div>
  );

  return (
    <article className={`project-card${compact ? ' compact' : ''}`} id={compact ? undefined : data.id}>
      {compact ? <Link to={`/projects#${data.id}`} className="cover-link">{cover}</Link> : cover}
      <div className="project-body">
        <p className="project-meta">{data.period}</p>
        <h3>{compact ? <Link to={`/projects#${data.id}`}>{data.title}</Link> : data.title}</h3>
        <p className="project-desc">{data.desc}</p>
        <ul className="tags">
          {data.tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
        {!compact && links.length > 0 && (
          <ul className="project-links">
            {links.map((l) => (
              <li key={l.label}><a href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a></li>
            ))}
          </ul>
        )}
        {!compact && (
          <details className="project-details">
            <summary>Details &amp; my contribution</summary>
            <ul>
              {data.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            {(data.media || []).length > 0 && (
              <div className="project-gallery">
                {data.media.map((m) => <Media item={m} key={m.src} />)}
              </div>
            )}
            {data.boundary && <p className="project-scope"><strong>Scope:</strong> {data.boundary}</p>}
          </details>
        )}
      </div>
    </article>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    boundary: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
    })),
    media: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      src: PropTypes.string,
    })),
  }).isRequired,
  compact: PropTypes.bool,
};

Cell.defaultProps = {
  compact: false,
};

export default Cell;
