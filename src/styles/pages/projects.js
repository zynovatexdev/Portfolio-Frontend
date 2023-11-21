import styled from "styled-components";
/*
############################################

        Home.jsx styled-components

############################################
*/
export const ProMainContainer = styled.div`
    

`;



/*
############################################

        ProjectTop.jsx styled-components

############################################
*/
export const PageTop = styled.div`
    background-color:rgba(16, 16, 53, 1);
    display: flex;
    justify-content: center;
    height: auto;
    color: #FFF;
    padding-top: 30px;
    
`;
export const Info = styled.div`
    width: 90%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom:50px ;

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

        ProjectList.jsx styled-components

############################################
*/


export const ProjectListCon = styled.div`
    width: 100%;
    display: flex;
    margin-top: 75px;
    justify-content: space-evenly;
    padding-left: 5%;
   padding-right: 5%;
   @media (max-width: 768px) {
      display: block;
      margin-bottom: 30px;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding-left:15%;
      padding-right:0;
  }

    
`;
export const ProjectInfo = styled.div`
    background-color: rgba(207, 207, 215, 1);
    width: 30%;
    border-radius: 20px;
    padding-bottom: 20px;
    img{
       width: 100%;
    }
    &:hover {
    transition: 0.7s;
    transform: scale(1.05); 
    background-color: rgba(16, 16, 53, 1);
    color: #FFF;
    p{  
      transition: 0.7s;
      
        color: #FFF;
    }
  }  
  &:not(:hover) {
    transition: all 0.7s;
  }
  @media (max-width: 768px) {
   
      margin-bottom: 30px;
      width: 80%;
  }
`;
export const ProjectName = styled.div`
    font-family: PT Serif;
    font-size: 22px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 20px;
  padding-right: 20px;
    
`;
export const CompanyName = styled.div`
  font-family: PT Serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
    color: rgba(97, 97, 97, 1);

;

`;
export const ProjectDate = styled.div`
        padding-left: 20px;
        padding-right: 20px;
        font-family: PT Serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(97, 97, 97, 1);

`;

export const NextPrevious = styled.div`
    display: flex;
    color:rgba(38, 54, 136, 1);
    background-color: #FFF;
    justify-content: space-between;
    width: 85%;
    align-items: center;
    text-align: center;
    margin-left: 7%;
    margin-top: 50px;
    


`;