import React from "react";
import { TeamHeader } from "../components/page/Teams/TeamHeader";
import { ClientTestimonials } from "../components/page/Teams/ClientTestimonials";
import MeetOurTeam from "../components/page/Teams/MeetOurTeam";
import { TeamProjects } from "../components/page/Teams/TeamProjects";
import { TeamAchievement } from "../components/page/Teams/TeamAchievement";

const Teams = () => {
  return (
    <div>
      <div>
        <TeamHeader />{" "}
      </div>
      <div>
        <MeetOurTeam />
      </div>
      <div>
        <TeamProjects />
      </div>
      <div>
        {" "}
        <TeamAchievement />{" "}
      </div>
      <div>
        <ClientTestimonials />
      </div>
    </div>
  );
};

export default Teams;
