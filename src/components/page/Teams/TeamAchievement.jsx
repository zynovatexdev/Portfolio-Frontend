import React from "react";
import {
  BelowHeader,
  TeamAchievementContainer,
  TeamAchievementCard,
  TeamAchievementCardContainer,
  SwiperStyle,
} from "../../../styles/pages/Teams";
import TeamSwiper from "./TeamSwiper";
import { achievements } from "./TeamSampleData";

export const TeamAchievement = () => {
  return (
    <div>
      <TeamAchievementContainer>
        <BelowHeader>
          Team Achievements
          <div>
            At ZYNOVATEX, our UI/UX team excels in crafting captivating digital
            experiences that harmonize aesthetics and usability. Explore our
            accolades that reflect our dedication to transformative design and
            innovation
          </div>
        </BelowHeader>
        <TeamAchievementCardContainer>
          <SwiperStyle>
            <TeamSwiper
              normalView={3}
              slides={achievements.map((achievement, index) => (
                <TeamAchievementCard key={index}>
                  <div>{achievement.icon}</div>
                  <h3>{achievement.title}</h3>
                  <h4>{achievement.description}</h4>
                </TeamAchievementCard>
              ))}
            />
          </SwiperStyle>
        </TeamAchievementCardContainer>
      </TeamAchievementContainer>
    </div>
  );
};

export default TeamAchievement;
