import styled from "styled-components";
import StarIcon from '@mui/icons-material/Star';
/*
############################################

        CustomerFeedback.jsx styled-components

############################################
*/
export const CustomerFeedCon = styled.div`
    height: 1350px;
    @media (max-width: 768px) {
      height: 1450px;
          
      }

`;

/*
############################################

        FeedTop.jsx styled-components

############################################
*/

export const FeedFromMain = styled.div`
 

`;
export const FeedCon = styled.div`
    background-color:rgba(16, 16, 53, 1);
    display: flex;
    justify-content: center;
    height: 330px;
    color: #FFF;
    padding-top: 30px;
`;
export const Info = styled.div`
    width: 90%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom:50px ;
    position: relative;

`;
export const PageTitle = styled.div`
    font-family: PT Serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 53px;
    margin-bottom: 20px;
    padding-top: 30px;
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
export const FeedFrom = styled.div`
    width: 70%;
    height: auto;
    position: absolute;
    margin-top: 200px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(207, 207, 215, 1);
    margin-left: 15%;
    padding-right: 50px;
    padding-left: 50px;
    padding-bottom: 30px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      height: auto;
      }
`;
export const Title = styled.div`
    font-family: PT Serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 53px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 60px;
    margin-left: 20px;
    margin-right: 20px;
    @media (max-width: 768px) {
        font-size: 30px;
        font-weight: 700;
        line-height: 33px;
        margin-bottom: 10px;
        padding-top: 20px;
      }

`;


export const NameEmail = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    @media (max-width: 768px) {
         display: block;
         margin-bottom: 0px;
      }

`;
export const StyleInput = styled.input`
    border: 1px solid rgba(92, 92, 92, 92);
        background-color: none;
        width: 49%;
        height: 70px;
        background-color: rgba(207, 207, 215, 1);
        &::placeholder {
        color: rgba(92, 92, 92); 
        font-family: PT Serif;
        font-size: 28px;
        padding-left: 20px;
        justify-content: center;
        }
        @media (max-width: 768px) {
         width: 100%;
         margin-bottom: 40px;
      }
`;
export const Rating = styled.div`
        font-family: PT Serif;
        font-size: 28px;
        font-weight: 700;
        line-height: 37px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(77, 77, 77, 1);
        margin-top: 50px;
`;
export const Stars = styled.div`
        display: flex;
  `;

export const Star = styled(StarIcon)`
    color: #8C8C8C;
    font-size: 40px !important;
    margin-top: 20px;
    margin-right: 10px;
    cursor: pointer;
 
    &.active {
      color: #E6D005 !important; 
  }
`;
export const StyleInput2 = styled.input`
   border: 1px solid rgba(92, 92, 92, 1);
        background-color: none;
        width: 100%;
        height: 70px;
        margin-top: 40px;
        background-color: rgba(207, 207, 215, 1);
        &::placeholder {
        color: rgba(92, 92, 92); 
        font-family: PT Serif;
        font-size: 28px;
        padding-left: 20px;
        justify-content: center;
        }
        @media (max-width: 768px) {
          margin-top: 30px;
      }
       
`;
export const RightText = styled.textarea`
   border: 1px solid rgba(92, 92, 92, 1);
        background-color: none;
        width: 100%;
        height: 205px;
        font-size: 20px;
        margin-top: 50px;
        background-color: rgba(207, 207, 215, 1);
        @media (max-width: 768px) {
          height: 200px; 
      }
      &::placeholder {
        color: rgba(92, 92, 92); 
        font-family: PT Serif;
        font-size: 28px;
        padding-left: 20px;
        justify-content: center;
        padding-top: 20px;
        }
`;

export const CheckboxContainer = styled.label`
    display: flex;
    margin-top: 30px;
    justify-content: left;
    align-items: start;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    font-size: 24px;
    font-family: pt serif;
    gap: 20px;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  &:hover .checkmark {
    background-color: #ccc;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
  p{
    color: #535353;
    font-size: 24px;
    font-family: PT serif;
    margin-left: 10px;

  }
`;

export const SubBtto = styled.div`
    margin-top: 50px;
    justify-content: end;
    display: flex;
    margin-right: 20px;
    font-family: PT Serif;
    @media (max-width: 768px) {
      margin-top: 20px;
      }
  `;

export const SubBtStyle2 = styled.div`
    background: rgba(16, 16, 53, 1);
    margin-left: 20px;
    border: 1px solid rgba(16, 16, 53, 1);
    width: 220px;
    color: #fff;
    height: 36px;
    text-align: center;
    border-radius: 10px;
    border: 1px;
    cursor: pointer;  
    padding-top: 8px;
  
    &:hover {
      transform: translateY(-5px);
      transition: 0.7s;
    
    }  
   
   
`;