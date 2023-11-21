import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import {
  CrewMainCon,
  CrewTopic,
  FoundersContainer,
  Founder,
  FounderDescription,
  FounderSpan,
  CrewSwiperWrapper,
} from "../../../styles/pages/about";
import founder1 from "../../../image/About/founder1.png";
import founder2 from "../../../image/About/founder2.png";
import founder3 from "../../../image/About/founder3.png";

const Crew = () => {
  return (
    <CrewMainCon>
      <br />
      <CrewTopic>Meet Our Founders</CrewTopic>
      <br />
      <FoundersContainer>
        <Founder>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={founder1} alt="founder1" width="40%" height="auto" />
          </div>
          <FounderDescription>
            <FounderSpan>Founder</FounderSpan>
            <br />
            Thomas Jane Colombo, <br /> Sri Lanka <br /> +94 76682265
          </FounderDescription>
        </Founder>
        <Founder>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={founder2} alt="founder2" width="40%" height="auto" />
          </div>

          <FounderDescription>
            <FounderSpan>Founder</FounderSpan>
            <br />
            Thomas Jane Colombo, <br /> Sri Lanka <br /> +94 76682265
          </FounderDescription>
        </Founder>
        <Founder>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={founder3} alt="founder3" width="40%" height="auto" />
          </div>

          <FounderDescription>
            <FounderSpan>Founder</FounderSpan>
            <br />
            Thomas Jane Colombo, <br /> Sri Lanka <br /> +94 76682265
          </FounderDescription>
        </Founder>
      </FoundersContainer>

      {/* 
      ###############################
          Swiper for mobile view 
      ###############################
      */}

      <CrewSwiperWrapper>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          style={{
            width: "50%",
            padding: "25px 0px 50px 0px",
            borderRadius: "12px",
            background:
              "var(--linear, linear-gradient(226deg, #101035 0%, #263688 100%))",
            boxShadow: "10px 10px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <SwiperSlide>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={founder1} alt="founder1" width="70%" height="auto" />
            </div>
            <FounderDescription>
              <FounderSpan>Founder</FounderSpan>
              <br />
              Thomas Jane Colombo, <br /> Sri Lanka <br /> +94 76682265
            </FounderDescription>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={founder2} alt="founder2" width="70%" height="auto" />
            </div>
            <FounderDescription>
              <FounderSpan>Founder</FounderSpan>
              <br />
              Thomas Jane Colombo, <br /> Sri Lanka <br /> +94 76682265
            </FounderDescription>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={founder3} alt="founder3" width="70%" height="auto" />
            </div>
            <FounderDescription>
              <FounderSpan>Founder</FounderSpan>
              <br />
              Thomas Jane Colombo, <br /> Sri Lanka <br /> +94 76682265
            </FounderDescription>
          </SwiperSlide>
        </Swiper>
      </CrewSwiperWrapper>
    </CrewMainCon>
  );
};

export default Crew;
