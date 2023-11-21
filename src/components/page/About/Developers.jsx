import React from "react";

//Swiper React components and styles and modules

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import {
  DevelopersMainContainer,
  DevelopersTopic,
  DevelopersContainer,
  DevelopersTopic2,
  DevelopersTopic3,
  Developer,
  DeveloperName,
  DeveloperSwiperWrapper,
  MDeveloperName,
  DeveloperDescription,
  SDevelopersTopic,
} from "../../../styles/pages/about";
import team from "../../../image/About/team.png";

const Developers = () => {
  return (
    <>
      <DevelopersMainContainer>
        <DevelopersTopic>Development Teams</DevelopersTopic>

        <DevelopersTopic2>ZYNOVATEX Team</DevelopersTopic2>
        <br />
        <br />
        <DevelopersTopic3>The Amazing Team Of Us</DevelopersTopic3>
        <br />
        <br />
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <DevelopersContainer>
              <Developer>
                <img src={team} alt="team" width="100%" height="auto" />
                <DeveloperName>UI/UX Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height="auto" />
                <DeveloperName>Front-End Developers Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height="auto" />
                <DeveloperName>Back-End Developers Team</DeveloperName>
              </Developer>
            </DevelopersContainer>
          </SwiperSlide>
          <SwiperSlide>
            <DevelopersContainer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>UI/UX Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Front-End Developers Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Back-End Developers Team</DeveloperName>
              </Developer>
            </DevelopersContainer>
          </SwiperSlide>
          <SwiperSlide>
            <DevelopersContainer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>UI/UX Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Front-End Developers Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Back-End Developers Team</DeveloperName>
              </Developer>
            </DevelopersContainer>
          </SwiperSlide>
          <SwiperSlide>
            <DevelopersContainer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>UI/UX Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Front-End Developers Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Back-End Developers Team</DeveloperName>
              </Developer>
            </DevelopersContainer>
          </SwiperSlide>
          <SwiperSlide>
            <DevelopersContainer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>UI/UX Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Front-End Developers Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Back-End Developers Team</DeveloperName>
              </Developer>
            </DevelopersContainer>
          </SwiperSlide>
          <SwiperSlide>
            <DevelopersContainer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>UI/UX Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Front-End Developers Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Back-End Developers Team</DeveloperName>
              </Developer>
            </DevelopersContainer>
          </SwiperSlide>
          <SwiperSlide>
            <DevelopersContainer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>UI/UX Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Front-End Developers Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Back-End Developers Team</DeveloperName>
              </Developer>
            </DevelopersContainer>
          </SwiperSlide>
          <SwiperSlide>
            <DevelopersContainer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>UI/UX Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Front-End Developers Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Back-End Developers Team</DeveloperName>
              </Developer>
            </DevelopersContainer>
          </SwiperSlide>
          <SwiperSlide>
            <DevelopersContainer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>UI/UX Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Front-End Developers Team</DeveloperName>
              </Developer>
              <Developer>
                <img src={team} alt="team" width="100%" height={235} />
                <DeveloperName>Back-End Developers Team</DeveloperName>
              </Developer>
            </DevelopersContainer>
          </SwiperSlide>
        </Swiper>
      </DevelopersMainContainer>

      {/* 
      ###############################
          Swiper for mobile view 
      ###############################
      */}

      <DeveloperSwiperWrapper>
        <SDevelopersTopic>Development Teams</SDevelopersTopic>
        <Swiper
          spaceBetween={30}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          style={{
            width: "50%",
            padding: "25px 25px 50px 25px",
            borderRadius: "12px",
            background:
              "var(--linear, linear-gradient(226deg, #101035 0%, #263688 100%))",
          }}
        >
          <SwiperSlide>
            <MDeveloperName>UI/UX Team</MDeveloperName>
            <DeveloperDescription>
              The UI Ux team has dedicated It’s time in designing the best UIs
              fr our apps and websites.The UI Ux team has dedicated It’s time in
              designing the best UIs fr our apps and websites{" "}
            </DeveloperDescription>
            <img
              src={team}
              alt="team"
              width="100%"
              height="auto"
              style={{ borderRadius: "15px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <MDeveloperName>Front-End Developers Team</MDeveloperName>
            <DeveloperDescription>
              The UI Ux team has dedicated It’s time in designing the best UIs
              fr our apps and websites.The UI Ux team has dedicated It’s time in
              designing the best UIs fr our apps and websites{" "}
            </DeveloperDescription>
            <img
              src={team}
              alt="team"
              width="100%"
              height="auto"
              style={{ borderRadius: "15px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <MDeveloperName>Back-End Developers Team</MDeveloperName>
            <DeveloperDescription>
              The UI Ux team has dedicated It’s time in designing the best UIs
              fr our apps and websites.The UI Ux team has dedicated It’s time in
              designing the best UIs fr our apps and websites{" "}
            </DeveloperDescription>
            <img
              src={team}
              alt="team"
              width="100%"
              height="auto"
              style={{ borderRadius: "15px" }}
            />
          </SwiperSlide>
        </Swiper>
      </DeveloperSwiperWrapper>
    </>
  );
};

export default Developers;
