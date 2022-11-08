import React from "react";

import ProjectCard from "../ProjectCard";
import "./index.scss";

const ProjectList = ({projectData}) => {
    return (
        <div className="project-list">
            {
                projectData.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            id={project.id}
                            image={project.image}
                            name={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            git_url={project.git_url}
                        />
                    )
                })
            }
        </div>
    )
};

export default ProjectList;