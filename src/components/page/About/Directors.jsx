import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

import {
  DirectorsMainContainer,
  DirectorsTopic,
  DirectorsTopic2,
  DirectorsContainer,
  Director,
  DirectorDescription,
  DirectorSpan,
  DirectorSwiperWrapper,
} from "../../../styles/pages/about";

import director from "../../../image/About/director.png";

const Directors = () => {
  return (
    <DirectorsMainContainer>
      <DirectorsTopic>The Faces Behind Our Success</DirectorsTopic>
      <DirectorsTopic2>Board of Directors</DirectorsTopic2>
      <br />
      <br />
      <DirectorsContainer>
        <Director>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={director} alt="director" width="60%" height="auto" />
          </div>

          <DirectorDescription>
            <DirectorSpan>Founder</DirectorSpan>
            <br />
            Thomas Jane Colombo,
            <br />
            Sri Lanka <br />
            +94 76682265
          </DirectorDescription>
        </Director>
        <Director>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={director} alt="director" width="60%" height="auto" />
          </div>

          <DirectorDescription>
            <DirectorSpan>Founder</DirectorSpan>
            <br />
            Thomas Jane Colombo,
            <br />
            Sri Lanka <br />
            +94 76682265
          </DirectorDescription>
        </Director>
        <Director>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={director} alt="director" width="60%" height="auto" />
          </div>

          <DirectorDescription>
            <DirectorSpan>Founder</DirectorSpan>
            <br />
            Thomas Jane Colombo,
            <br />
            Sri Lanka <br />
            +94 76682265
          </DirectorDescription>
        </Director>
      </DirectorsContainer>

      {/* 
      ###############################
          Swiper for mobile view 
      ###############################
      */}

      <DirectorSwiperWrapper>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          style={{
            display: "flex",
            justifyContent: "center",
            background: "none",
            width: "50%",
          }}
        >
          <SwiperSlide
            style={{
              background:
                "var(--ceo, linear-gradient(226deg, #101035 0%, #263688 100%))",
              borderRadius: "12px",
              paddingTop: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={director} alt="director" width="70%" height="auto" />
            </div>

            <DirectorDescription>
              <DirectorSpan>Founder</DirectorSpan>
              <br />
              Thomas Jane Colombo,
              <br />
              Sri Lanka <br />
              +94 76682265
            </DirectorDescription>
          </SwiperSlide>
          <SwiperSlide
            style={{
              background: "#C1C1C9",
              borderRadius: "12px",
              paddingTop: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={director} alt="director" width="70%" height="auto" />
            </div>

            <DirectorDescription>
              <DirectorSpan>Founder</DirectorSpan>
              <br />
              Thomas Jane Colombo,
              <br />
              Sri Lanka <br />
              +94 76682265
            </DirectorDescription>
          </SwiperSlide>
          <SwiperSlide
            style={{
              background: "#C1C1C9",
              borderRadius: "12px",
              paddingTop: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={director} alt="director" width="70%" height="auto" />
            </div>

            <DirectorDescription>
              <DirectorSpan>Founder</DirectorSpan>
              <br />
              Thomas Jane Colombo,
              <br />
              Sri Lanka <br />
              +94 76682265
            </DirectorDescription>
          </SwiperSlide>
        </Swiper>
      </DirectorSwiperWrapper>
    </DirectorsMainContainer>
  );
};

export default Directors;
