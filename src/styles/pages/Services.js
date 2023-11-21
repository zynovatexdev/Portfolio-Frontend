import React from "react";
import styled, { css } from "styled-components";
import ServicesBg from "../../image/servicesbg.png";
import ServiceHeader from "../../image/serviceHeader.jpg";
import { useState } from "react";

const media = {
  medium: "768px",
  small: "600px",
};

const HeaderService = styled.div`
  background-color: #101035;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: flex;
  padding: 10px 60px;

  @media (max-width: ${media.medium}) {
    padding: 10px 30px;
  }

  @media (max-width: ${media.small}) {
    padding: 10px 20px;
  }
`;

const BaseText = css`
  font-family: "PT Serif", serif;
  word-wrap: break-word;
`;

const HeaderText = styled.div`
  ${BaseText}
  width: 100%;
  text-align: center;
  color: white;
  font-size: 30px;
  font-weight: 700;
  padding: 10px 0px;

  animation: 0.5s ease-in-out alternate move;

  @keyframes move {
    0% {
      transform: translateY(-90px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: ${media.medium}) {
    font-size: 24px;
  }

  @media (max-width: ${media.small}) {
    font-size: 20px;
  }
`;

const HeaderDescription = styled.div`
  ${BaseText}
  width: 100%;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 400;
  padding: 10px 70px;

  animation: 0.6s ease-in-out alternate move;

  @keyframes move {
    0% {
      transform: translateY(-90px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: ${media.medium}) {
    font-size: 16px;
    padding: 10px 30px;
  }

  @media (max-width: ${media.small}) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

const ServiceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 40px 100px;
  overflow: hidden;

  @media (max-width: ${media.medium}) {
    padding: 20px 30px;
  }

  @media (max-width: ${media.small}) {
    padding: 10px 20px;
  }
`;

const ServiceCard = styled.div`
  font-family: "PT Serif";
  width: 30%;
  background-color: #101035;
  background-color: ${({ isActive }) =>
    isActive ? "#CFCFD7" : "#101035"}; /* Change the active color as desired */
  transform: ${({ isActive }) =>
    isActive
      ? "translateY(-15px)"
      : "none"}; /* Move the card in the x-direction when active */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px 0px;
  padding: 30px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 9px 9px 3px rgba(15, 15, 15, 0.25);

  @media (max-width: ${media.medium}) {
    width: 290px;
    margin: 10px 0;
    padding: 20px;
  }

  @media (max-width: ${media.small}) {
    width: 290px;
    padding: 15px;
  }
`;

const ServiceCardImage = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 49px;
  padding-bottom: 49px;
  background-color: ${({ isActive }) =>
    isActive
      ? "rgba(22, 27, 78, 0.3)"
      : "rgba(255, 255, 255, 0.20)"}; /* Change the active color as desired */
  box-shadow: -1px -3px 4px rgba(255, 255, 255, 0.38);
  border-radius: 13px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const ServiceCardImageContainer = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  background: #f5f5f5;
  border-radius: 59px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

const ServiceCardHeader = styled.div`
  color: ${({ isActive }) =>
    isActive ? "#000000" : "#FFFFFF"}; /* Change the active color as desired */
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  word-wrap: break-word;
  text-align: center;
  padding: 10px 0px;

  @media (max-width: ${media.medium}) {
  }

  @media (max-width: ${media.small}) {
    font-size: 17px;
  }
`;

const ServiceCardDescription = styled.div`
  color: ${({ isActive }) =>
    isActive ? "#000000" : "#FFFFFF"}; /* Change the active color as desired */
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
  text-align: center;

  @media (max-width: ${media.medium}) {
  }

  @media (max-width: ${media.small}) {
    font-size: 15px;
  }
`;

const ServiceCardButton = styled.div`
  width: 100%;
  height: 100%;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  word-wrap: break-word;
  text-align: left;
  padding: 30px 0px 0;

  p {
    color: ${({ isActive }) =>
      isActive
        ? "#000000"
        : "#FFFFFF"}; /* Change the active color as desired */
  }
`;

// Readmore styles

const ReadMoreService = styled.div`
  position: relative;
  background-color: #101035;
  background-image: url(${ServiceHeader});
  background-size: cover;
  width: 100%;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 4px;
  display: flex;
  padding: 60px;
`;

const ReadMoreText = styled.div`
  width: 30%;
  text-align: left;
  color: #d4d7e7;
  font-size: 30px;
  font-family: PT Serif;
  font-weight: 700;
  word-wrap: break-word;
  padding: 10px 0px;

  @media (max-width: ${media.medium}) {
    padding: 10px 0px;
    font-size: 25px;
    width: 100%;
  }

  @media (max-width: ${media.small}) {
    padding: 10px 0px;
    font-size: 25px;
    width: 100%;
  }
`;

const ReadMoreDescription = styled.div`
  width: 50%;
  text-align: left;
  color: white;
  font-size: 15px;
  font-family: "PT Serif", serif;
  font-weight: 400;
  word-wrap: break-word;
  padding: 10px 0px;

  @media (max-width: ${media.medium}) {
    padding: 10px 0px;
    font-size: 15px;
    width: 100%;
  }

  @media (max-width: ${media.small}) {
    padding: 10px 0px;
    font-size: 15px;
    width: 100%;
  }
`;

const ReadMoreBelowText = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  font-size: 20px;
  font-family: "PT Serif";
  font-weight: 700;
  word-wrap: break-word;
  padding: 10px 60px;

  div {
    width: 100%;
    height: 100%;
    color: black;
    font-size: 15px;
    font-family: "PT Serif";
    font-weight: 400;
    word-wrap: break-word;
  }
`;

const ReadMoreBelowDescription = styled.div`
  height: 100%;
  background-image: url(${ServicesBg});
  background-size: cover;
  border-radius: 14px;
  margin: 20px 60px;
  padding: 30px;
  background-color: rgba(16, 16, 53, 1); /* Adjust the opacity value */
`;

const ReadMoreBelowDescriptionCard = styled.div`
  height: 100%;
  text-color: black;
  font-size: 15px;
  font-family: "PT Serif";
  font-weight: 400;
  background: rgba(207, 207, 215, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  word-wrap: break-word;
  padding: 20px;
  margin: 10px 10px;
  display: flex;

  animation: 1s ease-in-out alternate move;

  @keyframes move {
    0% {
      transform: translateX(900px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

const ReadmoreBelowDescriptionCardHeader = styled.div`
  height: 100%;
  color: black;
  font-size: 40px;
  font-family: "PT Serif";
  font-weight: 700;
  line-height: 20px;
  word-wrap: break-word;

  margin: 10px 20px;
  display: flex;
  justify-content: center;
`;

const ReadmoreBelowDescriptionCardDescription = styled.div`
  color: black;
  font-size: 16px;
  font-family: "PT Serif";
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;

  b {
    font-weight: 700;
    font-weight: bold;
    font-size: 18px;
  }
`;

const ReadMoreTechnologyCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: #cfcfd7;
  font-size: 15px;
  font-family: "PT Serif";
  padding: 20px;
  margin: 20px 0px;
`;

const BackgroundImageWithOpacity = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${ServiceHeader});
  background-size: cover;
  opacity: 0.5; /* Adjust the opacity value */
`;

const ReadMoreTechnologyCardHeader = styled.div`
  height: 100%;
  font-weight: 700;
  font-size: 25px;
  font-family: "PT Serif";
  align-items: center;
  text-align: center;
`;

const ReadMoreTechnologyCardImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px 0px 70px 0px;
  justify-content: center;
  align-items: center;
  gap: 100px;
  display: inline-flex;
  padding: 0px 30px;

  img {
    width: 100%;
  }
  p {
    font-size: 15px;
    text-align: center;
  }

  @media (max-width: ${media.medium}) {
    gap: 20px;
    img {
      width: 100%;
    }
    p {
      font-size: 12px;
    }
  }

  @media (max-width: ${media.small}) {
    gap: 10px;
    img {
      width: 100%;
    }
    p {
      font-size: 10px;
    }
  }
`;

export {
  HeaderService,
  HeaderText,
  HeaderDescription,
  ServiceContainer,
  ServiceCard,
  ServiceCardImage,
  ServiceCardImageContainer,
  ServiceCardHeader,
  ServiceCardDescription,
  ServiceCardButton,
  ReadMoreService,
  ReadMoreText,
  ReadMoreDescription,
  ReadMoreBelowText,
  ReadMoreBelowDescription,
  ReadMoreBelowDescriptionCard,
  ReadmoreBelowDescriptionCardHeader,
  ReadmoreBelowDescriptionCardDescription,
  ReadMoreTechnologyCard,
  ReadMoreTechnologyCardHeader,
  ReadMoreTechnologyCardImage,
  BackgroundImageWithOpacity,
};
