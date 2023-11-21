import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { Link } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';

/*
############################################

        Footer.jsx styled-components

############################################
*/


export const MainCon = styled.div`
    width: 100%;
    height: auto;
    background-color: rgba(16, 16, 53, 1);
    padding-left:5%;
    padding-right:6%;
    font-family:pt serif;
    padding-top: 20px;
    margin-top: 30px;
    h2{
       color: #FFFF;
       font-size: 26px;
        font-weight: 700;
    }
    @media (max-width: 768px) {
      display: none;
    }

`;
export const MainConMob = styled.div`
    width: 100%;
    height:auto;
    background-color: rgba(16, 16, 53, 1);
    padding-left:5%;
    padding-right:6%;
    font-family:pt serif;
    padding-top: 20px;
    margin-top: 30px;
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
    h2{
       color: #FFFF;
       font-size: 26px;
        font-weight: 700;

    }

`;
export const Dtl = styled.div`
    display: flex;
    width: 100%;
    height:270px;
    @media (max-width: 768px) {
    display: block;
   
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color:rgba(190, 195, 219, 1);

  
`;

export const FandS = styled.div`
    display: flex;
  
    width: 50%;
    @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
    margin-bottom:30px;
  }
`;

export const ArrowRightAltIconButton = styled(EastIcon)`
  position: absolute;
  margin-left:85%;
  margin-top: 99%;
  margin-top: 2.5%;
  color: rgba(34, 34, 34, 0.5);
  width: 19.91px;
  height:15px ;
  @media (max-width: 768px) {
    margin-top: 0%;
    margin-left: 90%;
  }
`;

export const FristList = styled.div`
   width: 25%;
   
    h2{
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 25px;
        line-height: 35px;
    }
    @media (max-width: 768px) {
    width: 50%;
    margin-bottom:30px;
   
  }
  
`;
export const SocondList = styled.div`
   width: 25%;
   margin-left: 20%;
    h2{
        font-size: 26px;
        font-weight: 700;
        line-height: 35px;
        margin-bottom: 25px;
    }
    @media (max-width: 768px) {
    justify-content: space-between;
    width: 50%;
    margin-bottom:30px;
   
  }
    
`;

export const ThardList = styled.div`
   width: 25%;
   h2{
        font-size: 26px;
        font-weight: 700;
        line-height: 35px;
        margin-bottom: 25px;
    }
    @media (max-width: 768px) {
    width: 100%;
    justify-content: start;
    margin-bottom:30px;
   
  }
`;

export const FourthList = styled.div`
    width: 25%;
    h2{
        font-size: 26px;
        font-weight: 700;
        line-height: 35px;
        margin-bottom: 25px;
    }
    @media (max-width: 768px) {
    width: 100%;
    justify-content: start;
    margin-bottom:30px;
  }
`;
export const Item = styled.div`
  
  color:rgba(190, 195, 219, 1);
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 13px;
  display: flex;
  position: relative;
  margin-top: 25px;
  margin-bottom:25px ;
  span{
    margin-left: 12px;
  };     
`;
export const MailText = styled.div`
  
  color:black;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 13px;
  display: flex;
  position: relative;  
   
`;

export const Mail = styled.div`
    color:rgba(255, 255, 255, 1);
    font-size: 23px;
    font-weight: 400;
    margin-top: 32px;
    margin-bottom: 5px;

`;

export const StyInput = styled.input`
    width: 255px;
    border: none;
    border-radius: 10px;
    height: 35px;
    background-color:rgba(190, 195, 219, 1) ;
    @media (max-width: 768px) {
    width: 100%;
    
   
  }
    
`;


export const Socia = styled.div`
  margin-top: 40px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 600px;
    
   
  }

`;
export const Icon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
`;

export const SocialIcon = styled.div`
    display: flex;
    color: #FFF;
    width: 200px;
    gap: 20px;
    justify-content: space-between;
    margin-top: 10px;

`;
export const Facebook = styled(FacebookIcon)`
  font-Size:large;
       &:hover {
    transition: 0.5s;
    color:rgba(130, 151, 255, 1);
  }  
    &:not(:hover) {
      transition: all 0.5s;
    }
`;
export const Instagram = styled(InstagramIcon)`
  font-Size:large;
       &:hover {
    transition: 0.7s;
    color:rgba(130, 151, 255, 1);
  }  
    &:not(:hover) {
      transition: all 0.5s;
    }
`;
export const LinkedIn = styled(LinkedInIcon)`
  font-Size:large;
       &:hover {
    transition: 0.7s;
    color:rgba(130, 151, 255, 1);
  }  
    &:not(:hover) {
      transition: all 0.5s;
    }
`;
export const Twitter = styled(TwitterIcon)`
  font-Size:large;
       &:hover {
    transition: 0.7s;
    color:rgba(130, 151, 255, 1);
  }  
    &:not(:hover) {
      transition: all 0.5s;
    }
`;
export const SportsBasketball = styled(SportsBasketballIcon)`
  font-Size:large;
       &:hover {
    transition: 0.7s;
    color:rgba(130, 151, 255, 1);
  }  
    &:not(:hover) {
      transition: all 0.5s;
    }
`;
export const Question = styled.div`
    
    border-radius: 50%;
`;
export const Bot = styled.img`
    width: 80px;
    position: sticky;
    top: 0;
`;