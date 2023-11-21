import styled from "styled-components";

/*
############################################

        About.jsx styled-components

############################################
*/

export const AboutContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const PageTop = styled.div`
  background-color: rgba(16, 16, 53, 1);
  display: flex;
  justify-content: center;
  height: auto;
  color: #fff;
  padding-top: 30px;
`;

export const Info = styled.div`
  width: 90%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 50px;
`;
export const PageTitle = styled.div`
  font-family: PT Serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 53px;
  margin-bottom: 20px;
  animation: 0.7s ease-in-out alternate move;

  @keyframes move {
    0% {
      transform: translateY(-200px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
export const PageDtl = styled.div`
  font-family: PT Serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 42px;
  animation: 1s ease-in-out alternate move;

  @keyframes move {
    0% {
      transform: translateY(-300px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

/*
############################################

        Crew.jsx styled-components

############################################
*/

export const CrewMainCon = styled.div`
  width: 100%;
`;

export const CrewTopic = styled.div`
  color: #101035;
  font-family: PT Serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 7%;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 40px;
    margin-top: 40px;
  }
  @media (max-width: 834px) {
    font-size: 24px;
    margin-bottom: 23px;
    margin-top: 23px;
  }
`;

export const FoundersContainer = styled.div`
  margin: 0% 8% 0% 7%;
  border-radius: 15px;
  height: 100%;
  background: var(--linear, linear-gradient(226deg, #101035 0%, #263688 100%));
  display: flex;
  justify-content: space-between;
  padding: 4% 0% 4% 0%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Founder = styled.div`
  width: 100%;
  height: 100%;
  margin: 0% 2% 0% 2%;
`;

export const FounderSpan = styled.div`
  color: #fff;
  text-align: center;
  font-family: PT Serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 834px) {
    font-size: 32px;
  }
`;

export const FounderDescription = styled.div`
  color: #c6c3c3;
  font-family: PT Serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  @media (max-width: 834px) {
    font-size: 20px;
  }
`;

export const CrewSwiperWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

/*
############################################

        Directors.jsx styled-components

############################################
*/

export const DirectorsMainContainer = styled.div``;

export const DirectorsTopic = styled.div`
  color: #101035;
  font-family: PT Serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 7%;
  margin-top: 50px;
  @media (max-width: 834px) {
    font-size: 24px;
  }
`;

export const DirectorsTopic2 = styled.div`
  color: #263688;
  font-family: PT Serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 7%;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 40px;
    margin-top: 40px;
  }
  @media (max-width: 834px) {
    font-size: 20px;
    margin-bottom: 23px;
    margin-top: 23px;
  }
`;

export const DirectorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0% 8% 0% 7%;
  padding: 4%;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--linear, linear-gradient(226deg, #101035 0%, #263688 100%));
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Director = styled.div`
  width: 25%;
  height: auto;
  flex-shrink: 0;
  border-radius: 12px;
  background: #cfcfd7;
  box-shadow: 6px 6px 15px 0px rgba(0, 0, 0, 0.35);
  padding-top: 2%;
`;

export const DirectorDescription = styled.div`
  color: #505050;
  text-align: center;
  font-family: PT Serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 8%;
  @media (max-width: 768px) {
    color: #c6c3c3;
    font-size: 32px;
  }
`;

export const DirectorSpan = styled.div`
  color: #101035;
  text-align: center;
  font-family: PT Serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 834px) {
    color: #fff;
    font-size: 28px;
    font-weight: 400;
  }
`;

export const DirectorSwiperWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
/*
############################################

        Developers.jsx styled-components

############################################
*/

export const DevelopersMainContainer = styled.div`
  border-radius: 15px;
  background: linear-gradient(180deg, #101035 0%, #263688 100%);
  height: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DevelopersTopic = styled.div`
  color: #263688;
  font-family: PT Serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 7%;
  margin-top: 44px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 834px) {
    font-size: 20px;
    margin-bottom: 23px;
  }
`;

export const DevelopersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0% 14% 7% 14%;
`;

export const DevelopersTopic2 = styled.div`
  color: #fff;
  font-family: PT Serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin: 0px 0px 30px 0px;
  padding-top: 43px;
`;

export const DevelopersTopic3 = styled.div`
  color: #fff;
  font-family: PT Serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-bottom: 60px;
`;

export const Developer = styled.div`
  background: #cfcfd7;
  color: #101035;
  font-family: PT Serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  border-radius: 15px;
  margin: 0% 2% 0% 2%;
`;

export const DeveloperName = styled.div`
  border-radius: 0px 0px 15px 15px;
  background: #cfcfd7;
  color: #101035;
  font-family: PT Serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  padding: 8%;
`;

export const DeveloperSwiperWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SDevelopersTopic = styled.div`
  color: #101035;
  font-family: PT Serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 7%;
  margin: 44px 0px 44px 7%;
`;

export const MDeveloperName = styled.div`
  color: #fff;
  font-family: PT Serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 20px 0px;
`;

export const DeveloperDescription = styled.div`
  color: #bec3db;
  font-family: PT Serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 20px 0px;
`;
