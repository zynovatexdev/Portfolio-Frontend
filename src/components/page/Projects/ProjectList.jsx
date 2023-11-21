import React from 'react';
import ProjectOne from '../../../../src/image/image1.png';
import ProjectTwo from '../../../../src/image/image2.png';
import ProjectThree from '../../../../src/image/image3.png';
import { ProjectListCon, ProjectInfo, ProjectName, ProjectDate, CompanyName } from "../../../styles/pages/projects";

const projects = [
    {
        key: 1,
        image: ProjectOne,
        name: 'Online Learning Platform with Interactive Courses',
        comname: 'Client or Company Name',
        date: 'Completed in 2021',
    },
    {
        key: 2,
        image: ProjectTwo,
        name: 'Travel Booking Website Development',
        comname: 'Client or Comp Name',
        date: 'Completed in 2021',
    },
    {
        key: 3,
        image: ProjectThree,
        name: 'Bridal Fashion E-commerce Store',
        comname: 'Client or Comp Name',
        date: 'Completed in 2021',
    },
    {
        key: 4,
        image: ProjectOne,
        name: 'Online Learning Platform with Interactive Courses',
        comname: 'Client or Company Name',
        date: 'Completed in 2021',
    },
    {
        key: 5,
        image: ProjectTwo,
        name: 'Travel Booking Website Development',
        comname: 'Client or Comp Name',
        date: 'Completed in 2021',
    },
    {
        key: 6,
        image: ProjectThree,
        name: 'Bridal Fashion E-commerce Store',
        comname: 'Client or Comp Name',
        date: 'Completed in 2021',
    },

];

const ProjectList = () => {
    const line = projects.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 3);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);

    return (
        <div>
            {line.map((row, rowIndex) => (
                <ProjectListCon key={rowIndex}>
                    {row.map((project) => (
                        <ProjectInfo key={project.key}>
                            <img src={project.image} alt="Project_Image" />
                            <ProjectName>{project.name}</ProjectName>
                            <CompanyName><p>{project.comname}</p></CompanyName>
                            <ProjectDate><p>{project.date}</p></ProjectDate>
                        </ProjectInfo>
                    ))}
                </ProjectListCon>
            ))}
        </div>
    );
};

export default ProjectList;
