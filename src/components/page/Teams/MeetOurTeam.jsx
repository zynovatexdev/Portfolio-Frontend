import React from "react";
import {
  MeetOurTeamContainer,
  BelowHeader,
  TeamCard,
  TeamCardContainer,
  TeamCardImage,
  TeamCardName,
  TeamCardPosition,
  TeamCardDetails,
  TeamCardViewMore,
  SwiperStyle,
} from "../../../styles/pages/Teams";
import TeamSwiper from "./TeamSwiper";
import { teamMembers } from "./TeamSampleData";

const MeetOurTeam = () => {
  return (
    <div>
      <MeetOurTeamContainer>
        <BelowHeader>
          Meet our professional team
          <div>
            Discover the faces behind exceptional design. Our talented UI/UX
            experts bring creativity and user-centricity to every project.
            Explore their profiles below and witness the minds shaping
            tomorrow's digital interactions.
          </div>
        </BelowHeader>

        <TeamCardContainer>
          <SwiperStyle>
            <TeamSwiper
              normalView={3}
              slides={teamMembers.map((member, index) => (
                <TeamCard key={index}>
                  <TeamCardImage src={member.image} />
                  <TeamCardDetails>
                    <TeamCardName>{member.name}</TeamCardName>
                    <TeamCardPosition>{member.position}</TeamCardPosition>
                    <TeamCardPosition>{member.socialMedia}</TeamCardPosition>
                    <TeamCardViewMore>view more</TeamCardViewMore>
                  </TeamCardDetails>
                </TeamCard>
              ))}
            />
          </SwiperStyle>
        </TeamCardContainer>
      </MeetOurTeamContainer>
    </div>
  );
};

export default MeetOurTeam;
