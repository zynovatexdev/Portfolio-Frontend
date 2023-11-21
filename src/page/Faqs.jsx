import React, { useState } from "react";
import {  Typography } from "@mui/material";
import {
  HeaderDescription,
  HeaderService,
  HeaderText,
} from "../styles/pages/Services";
import {
  FaqCard,
  FaqCardContainer,
  FaqContainer,
  FaqContainerText,
  AccordionStyle,
  AccordionDetailsStyle,
  AccordionSummaryStyle,
} from "../styles/pages/Faq";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faqs = () => {


  const faqData = [
    { text: "Open Dropdown", description: "Description for Option 1" },
    { text: "Open down", description: "Description for Option 2" },
    { text: "wide display dongle", description: "Description for Option 3" },
    { text: "Open Dropdown", description: "Description for Option 1" },
    { text: "Open Dropdown", description: "Description for Option 1" },
    { text: "Open down", description: "Description for Option 2" },
    { text: "wide display dongle", description: "Description for Option 3" },
    { text: "Open Dropdown", description: "Description for Option 1" },
    { text: "Open Dropdown", description: "Description for Option 1" },
    { text: "Open down", description: "Description for Option 2" },
    { text: "wide display dongle", description: "Description for Option 3" },
    { text: "Open Dropdown", description: "Description for Option 1" },
  ];

  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div>
      <HeaderService>
        <HeaderText>FAQs</HeaderText>
        <HeaderDescription>
          Welcome to ZYNOVATEX. This Privacy Policy explains how we collect,
          use, share, and protect your personal information when you use our
          website zynovatex@gmail.com and its related services.
        </HeaderDescription>
      </HeaderService>

      <FaqContainer>
        <FaqContainerText>
          FAQs
          <div>
          Frequently asked questions with answers from our team.
          </div>
        </FaqContainerText>
        <FaqCardContainer>
          {faqData.map((item, index) => (
            <FaqCard
              key={index}
              expanded={expanded === index}
              onChange={() => handleAccordionChange(index)}
            >
              <AccordionStyle>
                <AccordionSummaryStyle>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <Typography>{item.text}</Typography>
                  </AccordionSummary>
                </AccordionSummaryStyle>

                <AccordionDetailsStyle>
                  <AccordionDetails>
                    <Typography>{item.description}</Typography>
                  </AccordionDetails>
                </AccordionDetailsStyle>
              </AccordionStyle>
            </FaqCard>
          ))}
        </FaqCardContainer>
      </FaqContainer>
    </div>
  );
};

export default Faqs;
