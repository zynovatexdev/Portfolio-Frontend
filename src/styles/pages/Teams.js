import styled from "styled-components";

const TeamHeaderr = styled.div`
  background-color: #101035;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: flex;
  padding: 10px 70px;

  @media (max-width: 768px) {
    padding: 10px 30px;
  }

  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

const TeamHeaderTitle = styled.div`
  font-family: "PT Serif", serif;
  word-wrap: break-word;
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

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const TeamHeaderDescription = styled.div`
  font-family: "PT Serif", serif;
  word-wrap: break-word;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 400;
  animation: 0.6s ease-in-out alternate move;

  @keyframes move {
    0% {
      transform: translateY(-90px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 30px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

const BelowHeader = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => (props.color === "light" ? "white" : "black")};
  font-size: 20px;
  font-family: "PT Serif";
  font-weight: 700;
  word-wrap: break-word;
  margin: 30px 0px 0px 0px;

  div {
    width: 100%;
    height: 100%;
    color: ${(props) => (props.color === "light" ? "white" : "black")};
    font-size: 15px;
    font-family: "PT Serif";
    font-weight: 400;
    word-wrap: break-word;
    margin: 30px 0px 0px 0px;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
  }

  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

const TeamCardContainer = styled.div`
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-direction: coloumn;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0px 30px 0px 0px;

  gap: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TeamCard = styled.div`
  width: 350px;
  height: 100%;
  color: black;
  border-radius: 20px;
  background-color: #101035;
  margin: 50px 0px 50px 0px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TeamCardImage = styled.div`
  width: 350px;
  height: 300px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 20px 20px 0px 0px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TeamCardDetails = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 30px;
  font-family: "PT Serif";
  font-weight: 700;
  word-wrap: break-word;

  border-radius: 0px 0px 10px 10px;

  @media (max-width: 768px) {
    padding: 10px 30px;
  }

  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

const TeamCardName = styled.div`
  color: white;
  font-size: 20px;
  font-family: "PT Serif";
  text-align: center;
  padding: 3px 0px;

  font-weight: 700;
  word-wrap: break-word;
`;

const TeamCardPosition = styled.div`
  color: #cfcfd7;
  text-align: center;
  font-size: 15px;
  font-family: "PT Serif";
  padding: 5px 0px;
`;

const TeamCardViewMore = styled.div`
  color: #8d8d95;
  text-align: center;
  font-size: 10px;
  font-family: "PT Serif";
  padding: 0px 0px 10px 0px;
`;

const MeetOurTeamContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 70px;
`;

const SwiperStyle = styled.div`
  width: 100%;
  height: 100%;

  .swiper-pagination-bullet {
    background-color: ${(props) => props.dotColor};
  }

  swiper-button-prev,
  .swiper-button-next {
    color: ${(props) => props.arrowColor}; /* Set your arrow color */
  }
`;

const SwiperSlide = styled.div`
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//team project styles
const TeamProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #101035;
  padding: 10px 70px;
`;

const TeamProjectsCardsContainer = styled.div`
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-direction: coloumn;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0px 30px 0px 0px;

  gap: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TeamProjectsCard = styled.div`
  width: 100%;
  margin: 50px 0px;
  position: relative;
  item-align: center;

  img {
    width: 350px;
    height: 200px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    border-radius: 20px;
    margin: 0px;

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  div {
    color: black;
    font-size: 20px;
    width: 350px;
    height: 20%;
    font-family: "PT Serif";
    item-align: center;
    text-align: center;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    font-weight: 700;
    word-wrap: break-word;
    bottom: 0;
    border-radius: 0px 0px 20px 20px;

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

`;

//Team achievements styles
const TeamAchievementContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 70px;
`;

const TeamAchievementCardContainer = styled.div`
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-direction: coloumn;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0px 30px 0px 0px;

  gap: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TeamAchievementCard = styled.div`
  width: 100%;
  margin: 50px 0px;
  position: relative;
  border: 1px solid #101035;
  border-radius: 20px;
  height: 250px;

  div {
    top: -40px;
    width: 80px;
    height: 80px;
    background-color: #101035;
    border-radius: 50%;
    align-items: center;
    display: flex; /* Add this to enable Flexbox */
    justify-content: center; /* Horizontally center the icon */
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    color: white;
  }

  h3 {
    color: black;
    font-family: "PT Serif";
    font-size: 18px;
    position: absolute;
    top: 50px;
    font-weight: 700;
    word-wrap: break-word;
    text-align: center;
    padding: 20px;
  }

  h4 {
    color: black;
    font-family: "PT Serif";
    font-size: 18px;
    text-align: center;
    item-align: center;
    position: absolute;
    top: 90px;
    font-weight: 400;
    word-wrap: break-word;
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
  }

  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

//Client testimonial styles
const ClientTestimonialContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 70px;
  background-color: #101035;
`;

const ClientTestimonialCardContainer = styled.div`
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-direction: coloumn;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0px 30px 0px 0px;

  gap: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ClientTestimonialCard = styled.div`
  width: 100%;
  margin: 50px 0px;
  position: relative;
  background-color: #cfcfd7;
  border-radius: 20px;
  height: 250px;
  padding: 20px;
  gap: 120px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  div img {
    width: 90px;
    height: 90px;
    background-image: linear-gradient(90deg, #101035 60%, #5e6fc4 100%);
    border-radius: 50%;
    align-items: center;
    display: flex; /* Add this to enable Flexbox */
    justify-content: center; /* Horizontally center the icon */
    color: white;
    padding: 8px;
  }

  div div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  div h3 {
    color: black;
    font-family: "PT Serif";
    font-size: 18px;
    font-weight: 700;
    display: flex;
    word-wrap: break-word;
    text-align: left;
  }

  div h4 {
    color: black;
    font-family: "PT Serif";
    font-size: 14px;
    display: flex;
    font-weight: 400;
    word-wrap: break-word;
    text-align: left;
    padding: 5px 0px;
  }

  h6 {
    color: black;
    font-family: "PT Serif";
    font-size: 12px;
    font-weight: 400;
    word-wrap: break-word;
    padding: 10px 0px;
  }

  h4 {
    color: black;
    font-family: "PT Serif";
    font-size: 18px;
    text-align: left;
    padding: 20px 0px;
    font-weight: 400;
    word-wrap: break-word;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
  }

  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

export {
  ClientTestimonialContainer,
  ClientTestimonialCard,
  ClientTestimonialCardContainer,
  TeamAchievementCard,
  TeamAchievementCardContainer,
  TeamAchievementContainer,
  TeamProjectsCard,
  TeamProjectsCardsContainer,
  TeamProjectsContainer,
  TeamCardViewMore,
  MeetOurTeamContainer,
  TeamHeaderr,
  SwiperSlide,
  SwiperStyle,
  TeamHeaderTitle,
  TeamCardDetails,
  TeamHeaderDescription,
  BelowHeader,
  TeamCard,
  TeamCardImage,
  TeamCardName,
  TeamCardPosition,
  TeamCardContainer,
};
