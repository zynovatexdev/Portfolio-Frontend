import { styled } from "styled-components";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const FaqContainer = styled.div`
  margin: 20px 100px;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(16, 16, 53, 0.7);
  border-radius: 20px;
  padding: 20px;

  @media (max-width: 600px) {
    margin: 20px 40px;
  }
`;

const FaqContainerText = styled.div`
margin: 5px 20px;
  display: flex;
  flex-direction: column;
  font-family: 'PT Serif';
  color: white;
    font-size: 20px;

    div {
        margin: 5px 0 0 0;
        font-size: 16px;
    }



`;

const FaqCardContainer = styled.div`
  margin: 20px 0;
  height: 50çç0px;
  overflow-y: scroll;
  padding: 15px;

  
`;
const AccordionStyle = styled(Accordion)`
    margin: 10px 0;
    border-radius: 5px;
`;

const AccordionSummaryStyle = styled.div`
    width: 100%;
    background: #cfcfd7;
    background: fill;
    border-radius: 5px;

`;

const AccordionDetailsStyle = styled.div`
    border-radius: 10px;
    background: white;
`;



const FaqCard = styled.div`
    border-radius: 5px;
`;

export {
  AccordionSummaryStyle,
  AccordionDetailsStyle,
  AccordionStyle,
  FaqContainer,
  FaqContainerText,
  FaqCardContainer,
  FaqCard,
};
