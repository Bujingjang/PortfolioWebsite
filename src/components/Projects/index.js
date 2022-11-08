import React, { useEffect, useState } from 'react';

import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';

import projectsData from '../../assets/project-list.json';
import ProjectList from '../ProjectList';

const Projects = ({ title, description, technologies, git_url, image }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [datasPerPage, setDatasPerPage] = useState(3);

  const handleWindowSizeChange = () => {
    setDatasPerPage(Math.floor(window.innerWidth / 400));
  };

  const handlePreviousClick = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    // console.log(dataPages);
    if (currentPage !== dataPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setDatasPerPage(Math.floor(window.innerWidth / 400));
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const dataPages = Math.ceil(projectsData.projects.length / datasPerPage);
  const lastDataIndex = currentPage * datasPerPage;
  const firstDataIndex = lastDataIndex - datasPerPage;
  const currentDatas = projectsData.projects.slice(
    firstDataIndex,
    lastDataIndex
  );

  if (currentPage > dataPages) {
    setCurrentPage(dataPages);
  }

  return (
    <>
      <div className="container-projects">
        <div className="previous-button">
          <FontAwesomeIcon
            icon={faCircleLeft}
            color="#D7D7D7"
            onClick={handlePreviousClick}
          />
        </div>
        <div className="card-list">
          <ProjectList projectData={currentDatas} />
        </div>
        <div className="next-button">
          <FontAwesomeIcon
            icon={faCircleRight}
            color="#D7D7D7"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
