import styled, { keyframes } from "styled-components";
import Back from "../../image/Back.png";
import BackMob from "../../image/BackMob.png";
import { Swiper } from "swiper/react";

/*
############################################

        Home.jsx styled-components

############################################
*/
export const Bot = styled.img`
  width: 80px;
  position: sticky;
  top: 0;
  top: 800px;
  margin-left: 92%;
  z-index: 2000;
  @media (max-width: 950px) {
    margin-left: 90%;
  }
  @media (max-width: 828px) {
    margin-left: 88%;
  }
  @media (max-width: 828px) {
    margin-left: 88%;
  }
  @media (max-width: 500px) {
    margin-left: 78%;
  }
`;
export const Hp = styled.div``;
export const HomeMainContainer = styled.div`
  width: 100%;
`;
/*
############################################

        HomeTop.jsx styled-components

############################################
*/
export const HomeTopCon = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${Back});
  background-size: cover;
  background-repeat: no-repeat;
  font-family: PT serif;
  padding-left: 7%;
  padding-right: 7%;
  padding-bottom: 10%;
  @media (max-width: 768px) {
    width: 100%;
    height: 650px;
    background-size: cover;
    background-image: url(${BackMob});
  }
`;
export const ButtonCon = styled.button`
  background-color: #d4d7e7;
  color: #000000;
  cursor: pointer;
  width: 100%;
  height: auto;
  background-image: url(${Back});
  background-size: cover;
  background-repeat: no-repeat;
  font-family: PT serif;
  padding-left: 7%;
  padding-right: 7%;
  padding-bottom: 10%;
  @media (max-width: 768px) {
    width: 100%;
    height: 650px;
    background-size: cover;
    background-image: url(${BackMob});
  }
`;
export const Topic = styled.div`
  font-size: 55px;
  color: #ffff;
  width: 60%;
  font-family: PT serif;
  font-weight: 700;
  line-height: 66px;
  padding-top: 100px;
  @media (max-width: 768px) {
    font-family: PT Serif;
    font-size: 33px;
    font-weight: 700;
    line-height: 50px;
    padding-bottom: 20px;
    width: 80%;
  }
`;

export const Dtl = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #d4d7e7;
  line-height: 210%;
  @media (max-width: 768px) {
    font-size: 17px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    font-family: Roboto;
  }
`;

/*
############################################

        Experience.jsx styled-components

############################################
*/
export const ExperienceCon = styled.div`
  width: 100%;
  height: auto;

  font-family: pt serif;
`;

export const EpxTopic = styled.div`
  font-size: 40px;
  line-height: 55px;
  font-weight: 700;
  margin: 20px 0 20px 0;
  padding-left: 7%;
  padding-right: 7%;
  @media (max-width: 834px) {
    font-family: PT Serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    width: 85%;
  }
`;

export const EpxDtl = styled.div`
  font-size: 24px;
  padding-left: 7%;
  padding-right: 7%;
  width: 100%;
  line-height: 30px;
  font-weight: 400;
  text-align: justify;
  color: #000000;
  margin-bottom: 30px;
  @media (max-width: 834px) {
    font-family: PT Serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: justified;
  }
`;
export const AchieveMainCon = styled.div`
  width: 85%;
  margin-top: 30px;
  height: auto;
  background-image: linear-gradient(
    to top,
    rgba(16, 16, 53, 1),
    rgba(38, 54, 136, 1)
  );
  border: none;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  margin-left: 7%;
  margin-right: 7%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AchieveCon2 = styled.div`
  height: auto;
`;

export const MobSw = styled.div`
  height: auto;

  @media (min-width: 834px) {
    display: none;
  }
`;
export const SwiperM = styled(Swiper)`
  height: auto;
  padding-bottom: 30px;
  .swiper-pagination-bullet {
    background-color: rgb(64, 64, 65);
    transition: all 1s;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: rgba(16, 16, 53, 1);

    transform: scale(1.4);
  }
`;
export const AchieveCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Achive = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    transition: 0.7s;
    transform: scale(1.1);
  }
  &:not(:hover) {
    transition: all 0.7s;
  }
`;
export const Achive1 = styled.div`
  justify-content: center;
  &:hover {
    transition: 0.7s;
    transform: scale(1.1);
  }
  &:not(:hover) {
    transition: all 0.7s;
  }
`;
export const Achive2 = styled.div`
  margin-left: 17%;
  margin-right: 17%;
  padding-bottom: 40px;
  margin-bottom: 50px;
  height: auto;
  padding-bottom: 60px;
  border-radius: 40px;
  background-image: linear-gradient(
    to bottom,
    rgba(16, 16, 53, 1),
    rgba(38, 54, 136, 1)
  );
  justify-content: center;
`;
export const AchiveTopic = styled.div`
  font-family: PT Serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: 0em;
  color: #ffff;
`;
export const AchiveDtl = styled.div`
  font-family: PT Serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0em;
  color: rgba(190, 195, 219, 1);
  text-align: center;
  padding-bottom: 18px;
`;
export const AchiveDtl2 = styled.div`
  font-family: PT Serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0em;
  color: rgba(190, 195, 219, 1);
  text-align: center;
  font-family: PT Serif;
  font-size: 30px;
  font-weight: 400;
  text-align: center;

  h1 {
    padding-top: 70px;
    margin-bottom: 70px;
    color: #fff;
  }
`;
export const VerticalLine = styled.div`
  width: 1px;
  height: 160px;
  background-color: #fff;
`;

export const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid #fff;
  width: 85%;
  padding-top: 30px;
  margin-left: 7%;
`;
export const Image = styled.hr`
  width: max-content;
  background-color: red;
`;

/*
############################################

        Sweper.jsx styled-components

############################################
*/

export const SwTopic = styled.div`
  margin-top: 20px;
  font-family: PT Serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: justified;
`;

export const Description = styled.div`
  width: 100%;
  padding-bottom: 40px;
  justify-content: center;
  font-size: 20px;
  margin-top: 10px;
  font-family: PT Serif;
  font-weight: 400;
  line-height: 32px;
  text-align: justified;
  color: rgba(255, 255, 255, 0.7);
  @media (max-width: 834px) {
    font-family: PT Serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: justified;
  }
`;

export const StyledImage = styled.img`
  height: auto;
  margin-left: 7%;
  margin-top: 4%;
  /* @media (min-width: 450px) {
    margin-left: 2%;
    width: 148px;
    height: 135px;
  } */
  @media (max-width: 834px) {
    margin-left: 38%;
    width: 148px;
    height: 135px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 834px) {
    display: block;
    align-items: center;
    justify-content: center;
  }
`;
export const SwDtl = styled.div`
  margin-left: 7%;
  margin-right: 7%;
`;

export const StyledSwiper = styled(Swiper)`
  background-image: linear-gradient(
    to bottom,
    rgba(16, 16, 53, 1),
    rgba(38, 54, 136, 1)
  );

  width: 100%;
  height: auto;
  color: #ffff;
  padding-bottom: 5%;

  .swiper-pagination-bullet {
    background-color: rgba(152, 152, 152, 1);
    transition: all 1s;
  }

  .swiper-pagination-bullet-active {
    background-color: rgba(16, 16, 53, 1);

    transform: scale(1.3);
  }
  @media (max-width: 834px) {
    width: 90%;
    border-radius: 30px;
  }
`;

/*
############################################

        WhyUs.jsx styled-components

############################################
*/
export const WhyUsMainCon = styled.div`
  margin-left: 7%;
  margin-right: 7%;
  height: auto;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-left: 0%;
    margin-right: 0%;
    width: 100%;
  }
`;
export const Massages = styled.div`
  display: flex;
  margin-left: 7%;
  margin-right: 5%;
  padding-top: 50px;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const WhyUsInfo = styled.div`
  margin-bottom: 40px;
  margin-left: 7%;
  margin-right: 7%;
  /* @media (max-width: 768px) {
        display: none;
       
  } */
`;
export const WhyUsTopic = styled.div`
  font-family: PT Serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 768px) {
    font-family: PT Serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const FeedTopMob = styled.div`
  display: none;
  @media (max-width: 768px) {
    font-family: PT Serif;
    font-size: 40px;
    display: block;
    font-weight: 700;
    line-height: 53px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const WhyUsDtl = styled.div`
  font-family: PT Serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: justified;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-family: PT Serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: justified;
  }
`;
export const MassageMainCon = styled.div`
  height: auto;
  border-radius: 20px;
  background-image: linear-gradient(
    to top,
    rgba(16, 16, 53, 1),
    rgba(38, 54, 136, 1)
  );
  margin-top: 30px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    border-radius: 0px;
  }
`;

export const MassageTopic = styled.div`
  font-family: PT Serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #ffff;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MassageTopicDtop = styled.div`
  font-family: PT Serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #ffff;
`;
export const MassageTopicmob = styled.div`
  font-family: PT Serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #ffff;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MassageDtl = styled.div`
  color: rgba(255, 255, 255, 1);
  background-color: rgba(242, 244, 252, 0.2);
  height: auto;
  padding: 25px;
  width: auto;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 20px;
  font-family: PT Serif;
  font-size: 23px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: justified;
  &:hover {
  }
`;

/*
############################################

        FeedBack.jsx styled-components

############################################
*/

export const FeedStyledSwiper = styled(Swiper)`
  background-color: rgba(16, 16, 53, 3);
  width: 100%;
  height: auto;
  padding-bottom: 50px;

  .swiper-pagination-bullet {
    background-color: rgba(152, 152, 152, 1);
  }

  .swiper-pagination-bullet-active {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.5);
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #676767;
    font-weight: bold;
  }

  @media (max-width: 834px) {
    display: none;
  }
`;

export const FeedStyledSwiperMob = styled(Swiper)`
  background-color: rgba(16, 16, 53, 3);
  width: 100%;
  height: auto;
  padding-bottom: 50px;

  .swiper-pagination-bullet {
    background-color: rgba(152, 152, 152, 1);
  }

  .swiper-pagination-bullet-active {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.5);
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #676767;
    font-weight: bold;
  }
  @media (min-width: 834px) {
    display: none;
  }
`;
export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeedContent = styled.div`
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  height: auto;
  margin-top: 40px;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 5px;
  font-family: pt serif;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const FeedBackCon = styled.div`
  background-color: rgba(16, 16, 53, 1);
  width: 100%;
  height: max-content;
  padding-bottom: 30px;
  color: #ffff;
  margin-bottom: 10px;
  /* padding-left: 40px;
  padding-right: 40px; */

  /* @media (max-width: 768px) {
        display: none;     
  } */
`;
export const FeedBackInfo = styled.div`
  margin-left: 7%;
  margin-right: 7%;
  margin-top: 20px;
  padding-top: 30px;
  margin-bottom: 20px;
`;
export const FeedTop = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: start;
  align-items: center;
  margin-left: 15px;
  img {
    border-radius: 20px;
    width: 80px;
    height: 80px;
  }
`;
export const FeedProfile = styled.div``;
export const CusInfo = styled.div`
  margin-left: 40px;
`;
export const FeedCusName = styled.div`
  color: black;
  font-family: PT Serif;
  font-size: 23px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
`;
export const FeedCusDtl = styled.div`
  color: rgba(99, 99, 99, 1);
  font-family: PT Serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
export const FeedDtl = styled.div`
  color: rgba(99, 99, 99, 1);
  font-family: PT Serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 23px;
  button {
    color: rgba(12, 141, 186, 1);
    font-family: PT Serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
    background-color: #fff;
  }
`;

export const FeedDate = styled.div`
  color: rgba(99, 99, 99, 1);
  font-family: PT Serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 30px;
`;

/*
############################################

        DownMenu.jsx styled-components

############################################
*/

export const DownMenuCon = styled.div`
  display: flex;
  width: 100%;
  height: 380px;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const TopShotLine = styled.hr`
  border: none;
  border-top: 1px solid rgba(16, 16, 53, 1);
  width: 20%;
  margin-top: 50px;
  position: absolute;
  cursor: pointer;
`;

export const ShortLine = styled.div`
  border: none;
  background-image: linear-gradient(
    to top,
    rgba(16, 16, 53, 1),
    rgba(38, 54, 136, 1)
  );
  height: 280px;
  width: 25%;
  border-radius: 30px;
  position: absolute;
  margin-top: 50px;
  color: #fff;
  font-family: PT Serif;
  font-weight: 700;
  line-height: 37px;

  @media (max-width: 768px) {
    width: 80%;
    margin-left: 10%;
    height: 280px;
  }
  h2 {
    padding-top: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 25px;
  }
  p {
    width: 80%;
    text-align: center;
    justify-content: center;
    display: flex;
    margin-left: 10%;
    margin-top: 20px;
    font-family: PT Serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 21px;
    padding-bottom: 20px;
  }
`;

export const NumOneTopicmob = styled.div`
  border: none;
  background-image: linear-gradient(
    to bottom,
    rgba(16, 16, 53, 1),
    rgba(38, 54, 136, 1)
  );
  height: 280px;
  width: 25%;
  border-radius: 30px;
  position: absolute;
  margin-top: 50px;
  color: #fff;
  font-family: PT Serif;
  font-weight: 700;
  line-height: 37px;
  @media (max-width: 768px) {
    width: 80%;
    margin-left: 10%;
    height: 280px;
  }

  h2 {
    padding-top: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 25px;
  }
  p {
    width: 80%;
    text-align: center;
    justify-content: center;
    display: flex;
    margin-left: 10%;
    margin-top: 20px;
    font-family: PT Serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 21px;
    padding-bottom: 20px;
  }
`;

export const NumOneTopic = styled.div`
  width: 83px;
  height: 83px;
  margin-bottom: 300px;
  background-color: rgba(207, 207, 215, 1);
  color: rgba(0, 0, 0, 1);
  border-radius: 50%;
  font-family: Aclonica;
  font-size: 50px;
  font-weight: 400;
  line-height: 57px;
  letter-spacing: 0em;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
`;

export const NumOneTopicM = styled.div`
  width: 83px;
  height: 83px;
  margin-bottom: 300px;
  background-color: rgba(207, 207, 215, 1);
  color: rgba(0, 0, 0, 1);
  border-radius: 50%;
  font-family: Aclonica;
  font-size: 50px;
  font-weight: 400;
  line-height: 57px;
  letter-spacing: 0em;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  margin-left: 42%;

  @media (max-width: 400px) {
    margin-left: 35%;
  }
`;
export const NumSection = styled.div`
  width: 40%;
  align-items: top;
  justify-content: center;
  display: flex;
`;
export const SwiperMob = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: rgba(156, 156, 156, 1);
    transition: all 1s;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: rgba(16, 16, 53, 1);

    transform: scale(1.3);
  }
`;
const popUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const AnimatedShortLine = styled(ShortLine)``;

export const AnimatedNumSection = styled(NumSection)`
  &.visible ${AnimatedShortLine} {
    opacity: 1;

    animation: ${popUpAnimation} 2.5s;
  }
`;
export const MobDown = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const DownDtl = styled.div`
  color: #ffff;
  align-items: center;
  justify-content: center;
  padding-top: 80px;

  h2 {
    font-family: PT Serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  p {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    margin-left: 3%;
    margin-right: 3%;
  }
`;
