import styled from "styled-components";

export const OfficeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    align-items: left;
    justify-content: left;
  }
`;

export const HorizontalLine = styled.div`
  width: 7vw;
  height: 0.5vh;
  background-color: #333;
  margin-top: 1vh;
  margin-left: 15vw;
`;

export const OfficeText = styled.h1`
  font-weight: bold;
  color: #333;
  margin-top: 1vh;

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

export const OfficeDescription = styled.h2`
  font-weight: bold;
  color: #333;
`;

export const BlueDiv = styled.div`
  background-color: rgba(16, 16, 53, 1);
  width: 70vw;
  height: 120vh;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: 5vh;
  margin-left: 15vw;
  position: relative;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    /* Adjust width and other styles for smaller screens */
    width: 90vw;
    height: auto;
    margin-left: 5vw;
    align-items: center;
    justify-content: center;
  }
`;

export const MapIframe = styled.iframe`
  width: 80%;
  height: 70%;
  border: none;
  margin-top: 8vh;
  border-radius: 10px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  flex: 1;
  padding: 2vw;
  font-size: 18px;
  color: white;
  line-height: 1.5;
  margin-top: -7vh;

  @media screen and (max-width: 768px) {
    margin-top: 0vh;
  }
`;
