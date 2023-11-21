import styled from "styled-components";

const media = {
  medium: "768px",
  small: "600px",
};

/* ######################################

        BlogTop.jsx styled-components 
        
    #####################################*/

export const PageTop = styled.div`
  background-color: rgba(16, 16, 53, 1);
  display: flex;
  justify-content: center;
  height: auto;
  color: #fff;
  padding-top: 30px;
  margin-bottom: 50px;
`;

export const TopText = styled.div`
  width: 90%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 50px;
`;

export const TopTitle = styled.div`
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

/* ######################################

        BlogCards.jsx styled-components 
        
    #####################################*/

export const Card = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.div`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
  margin-bottom: 0.35em;
`;

export const CardText = styled.div`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`;

export const CardSubText = styled.div`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 12px;
`;

/* ######################################

        BlogReadMore.jsx styled-components 
        
    #####################################*/

export const Bot = styled.img`
  width: 80px;
  position: fixed;
  top: auto;
  right: 20px;
  bottom: 20px;
  left: auto;
  margin: 0;

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

export const ButtonStack = styled.div`
  display: flex;
  background-color: rgba(231, 227, 227, 0.5);
  padding: 5px;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ReadMiddle = styled.div`
  padding-top: 50px;
  padding-right: 50px;
  padding-left: 50px;
`;

export const RMBlogs = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;
