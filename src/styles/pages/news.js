import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
/*
############################################

        News.jsx styled-components

############################################
*/
export const NewsMainCon = styled.div``;

/*
############################################

      NewsTop.jsx styled-components

############################################
*/
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

        NewsContaner.jsx styled-components

############################################
*/
export const NewsBody = styled.div`
  display: flex;
  margin-left: 7%;
  margin-right: 7%;
  margin-top: 100px;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const NewsLeft = styled.div`
  background-color: #101035;
  width: 30%;
  border-radius: 20px;
  height: 800px;
  color: #fff;
  padding-left: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 968px) {
    width: 35%;
  }
  h3 {
    color: #fff;

    padding-top: 40px;
  }
  li {
    padding-top: 20px;
    color: #ffffff;
    list-style: none;
    padding-left: 10px;
    input[type="checkbox"] {
      margin-right: 10px;
      color: #c5c5c5;
      background-color: #c5c5c5;
    }
  }
`;
export const Categories = styled.div`
  color: #c5c5c5;
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 30px;
`;
export const Vline = styled.hr`
  border: none;
  border-top: 0.7px solid #fff;
  width: 90%;
  margin-top: 20px;
`;
export const Vline2 = styled.hr`
  border: none;
  border-top: 0.7px solid #5e5e5e;
  width: 100%;
  margin-top: 20px;
`;
export const NewsRight = styled.div`
  width: 70%;
  @media (min-width: 968px) {
    width: 65%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Newsnum = styled.div``;
export const NewsTopic = styled.div`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 400;
`;
export const NewsDate = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: #767676;
`;
export const Read = styled.div`
  display: flex;
  margin-top: 20px;

  a {
  }
`;
export const ReadIcon = styled(ArrowRightAltIcon)`
  color: #0c8dba;
  margin-left: 10px;
`;
export const Dropdown = styled.div`
  margin-top: 20px;
  select {
    width: 150px;
    height: 35px;
    border-radius: 5px;
    background-color: #cfcfd7;
    color: #000000;
  }
`;

export const StyledLink = styled(Link)`
  color: #0c8dba;
  font-size: 14px;
  text-decoration: none;
`;
