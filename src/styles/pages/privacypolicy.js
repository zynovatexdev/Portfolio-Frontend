import styled from "styled-components";
/*
############################################

        PrivacyPolicy.jsx styled-components

############################################
*/
export const PrivacyPolicyCon = styled.div`
    

`;



/*
############################################

        privacTop.jsx styled-components

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

        PrivacyInfo.jsx styled-components

############################################
*/

export const PrivacyInfoCon = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const Conternar = styled.div`
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 85%;
    padding: 50px;
    border-radius: 20px;
    margin-top: 50px;
    background-color:rgba(207, 207, 215, 0.69);
    font-family: PT Serif;
    h5{
        font-size: 20px;
        font-weight: 700;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: justified;
        margin-top: 20px;
    }
    p{
        line-height: 35px;
    }

    ul{
        margin-left: 30px;
        line-height: 30px;
    }



    ;

`;