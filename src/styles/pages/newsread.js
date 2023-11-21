import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const ReadNewsTopCon = styled.div`
  height: auto;
  margin-top: 30px;
`;
export const NewsTopic = styled.div`
  font-size: 36px;
  margin-left: 5%;
  font-family: PT Serif;
`;
export const BackIosIcon = styled(ArrowBackIosIcon)`
  width: 60px;
  height: 60px;
`;
export const Top = styled.div`
  display: flex;
`;
export const Discription = styled.div`
  margin-left: 9.9%;
  margin-top: 20px;
`;
export const DiscriptionContent = styled.div`
  font-family: PT Serif;
  font-size: 20px;
  margin-top: 20px;
  margin-right: 50px;
`;
export const SubTopic = styled.div`
  color: #263688;
  font-family: PT Serif;
  font-size: 28px;
  font-weight: bold;
`;

export const TopBackground = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  background-color: rgba(16, 16, 53, 1);
  display: flex;
  position: relative;
  height: 200px;
  color: #fff;
  margin-top: 80px;
  box-shadow: rgba(0, 0, 0, 0.5);
  img {
    position: absolute;
    bottom: -38%;
    box-shadow: rgba(0, 0, 0, 0.5);
    width: 40%;
    height: 350px;
    margin-left: 8%;
  }
  div {
    width: 50%;
  }
`;
export const TopBackgroundMob = styled.div`
  margin-left: 18%;
  margin-right: 18%;
  height: auto;
  padding-bottom: 30px;
  border-radius: 20px;
  background-color: rgba(16, 16, 53, 1);
  position: relative;
  color: #fff;
  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.5);
  img {
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.5);
    width: 140%;
    left: -20%;
    height: 300px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Text = styled.div`
  width: 80%;
  font-family: PT Serif;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-right: 50px;
`;

export const TextMob = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  line-height: 1.5;
  font-family: PT Serif;
  font-size: 20px;
  width: 100%;
  padding-top: 300px;
  text-align: center;
`;

export const NewsContentDtl = styled.div`
  font-family: PT Serif;
  font-size: 20px;

  line-height: 1.7;
  margin-left: 9%;
  margin-right: 9%;
`;
export const NewsContentTopic = styled.div`
  color: #000;
  font-family: PT Serif;
  font-size: 22px;
  margin-left: 9%;
  margin-right: 9%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const NewsContent = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
`;

export const StyledLink = styled(Link)`
  margin-left: 2.5%;
  text-decoration: none;
`;
