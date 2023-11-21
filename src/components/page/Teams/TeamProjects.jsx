import React from "react";
import {
  TeamProjectsContainer,
  BelowHeader,
  TeamProjectsCard,
  TeamProjectsCardsContainer,
  SwiperStyle,
} from "../../../styles/pages/Teams";

import TeamSwiper from "./TeamSwiper";
import { projects } from "./TeamSampleData";

export const TeamProjects = () => {
  return (
    <div>
      <TeamProjectsContainer>
        <BelowHeader color="light">
          Our Projects
          <div>
            Delve into a showcase of our UI/UX team's exceptional work, spanning
            diverse projects that exemplify their creativity and expertise.
            Explore designs that redefine digital interactions and elevate user
            experiences.{" "}
          </div>
        </BelowHeader>
        <TeamProjectsCardsContainer>
          <SwiperStyle dotColor="white">
            <TeamSwiper
              normalView={3}
              slides={projects.map((project, index) => (
                <TeamProjectsCard key={index}>
                  <div>{project.title}</div>
                  <img src={project.image} alt={`Project ${index}`} />
                </TeamProjectsCard>
              ))}
            />
          </SwiperStyle>
        </TeamProjectsCardsContainer>
      </TeamProjectsContainer>
    </div>
  );
};
