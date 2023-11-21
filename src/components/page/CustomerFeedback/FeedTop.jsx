import React, { useState } from 'react';
import { FeedCon, Stars, Star, SubBtStyle2, SubBtto, StyleInput, Samp, RightText, CheckboxContainer, StyleInput2, Rating, NameEmail, Title, FeedFromMain, Info, PageTitle, FeedFrom } from "../../../styles/pages/Feedback";




const FeedTop = () => {
  const [activeStars, setActiveStars] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    const newActiveStars = [...activeStars];
    newActiveStars[index] = !newActiveStars[index];
    setActiveStars(newActiveStars);
  };

  return (
    <FeedFromMain>
      <FeedFrom>
        <Title>We would love to hear about your experience</Title>
        <NameEmail>
          <StyleInput type="text" placeholder="Full name" />
          <StyleInput type="text" placeholder="Email address" />
        </NameEmail>
        <StyleInput2 type="text" placeholder="Company name" />
        <StyleInput2 type="text" placeholder="Review title" />
        <Rating>
          Your Rating
        </Rating>
        <Stars>
          <Stars>
            {activeStars.map((isActive, index) => (
              <Star
                key={index}
                onClick={() => handleStarClick(index)}
                className={isActive ? "active" : ""}
              />
            ))}
          </Stars>
        </Stars>
        <RightText placeholder="Your Feedback" />

        <CheckboxContainer>
          <input type="checkbox" />
          <span className="checkmark"></span>
          <p>We care about protecting your data. Here's our <b> Privacy Policy.</b> </p>
        </CheckboxContainer>
        <SubBtto>
          <SubBtStyle2 >Apply Now</SubBtStyle2>
        </SubBtto>
      </FeedFrom>
      <FeedCon>
        <Info>
          <PageTitle>
            Customer Feedback
          </PageTitle>
        </Info>
      </FeedCon>
    </FeedFromMain>
  )
}

export default FeedTop;
