import React from 'react';

import './index.scss';

const ProjectCard = ({ id, image, name, description, technologies, git_url }) => {
  return (
    <div className="card">
      <div className="card-image">
        {image && <img src={image} alt="test" />}
      </div>
      <div className="card-info">
        <h1 className="title">{name}</h1>
        <p>{description}</p>
        <ul className="technologies">
          {technologies.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })}
        </ul>
        <a href={git_url} className="flat-button-project">SOURCE</a>
      </div>
    </div>
  );
};

export default ProjectCard;
