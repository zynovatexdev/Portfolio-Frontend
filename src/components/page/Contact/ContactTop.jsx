import React, { useState } from "react";
import countriesData from "./Country.json";
import {
  Container,
  Blue1Div,
  backgroundImageStyle,
  GrayDivCont,
  Leftdiv,
  FlexColumn,
  StyledLabel,
  StyledInput,
  Inputdiv,
  Fields,
  TextFields,
  StyledSelect,
  SubmitButton,
  Rightdiv,
  CallUsText,
  PhoneNumber,
  BlueLine,
  CallUsWrapper,
  ReasonTextArea,
} from "../../../styles/pages/Carees";

const ContactTop = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div style={backgroundImageStyle}>
      <Container>
        <Blue1Div>
          <h1>Contact Us</h1>
          <p>
            Zynovatex has been in service for 6 years since 2012, and we have
            served many happy and satisfied customers
            <br />
            throughout the years. In Zynovatex we provide several services
          </p>
        </Blue1Div>
        <GrayDivCont>
          <Leftdiv>
            <h3>Please fill out this form. We’ll get in touch shortly.</h3>
            <Inputdiv>
              <FlexColumn>
                <StyledLabel htmlFor="fname">First Name:</StyledLabel>
                <StyledInput
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="First Name.."
                />
              </FlexColumn>

              <FlexColumn>
                <StyledLabel htmlFor="lname">Last Name:</StyledLabel>
                <StyledInput
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Last Name.."
                />
              </FlexColumn>
            </Inputdiv>
            <TextFields>
              <FlexColumn>
                <StyledLabel htmlFor="email">Email:</StyledLabel>
                <Fields
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address.."
                />
              </FlexColumn>
              <FlexColumn>
                <StyledLabel htmlFor="tel">Phone:</StyledLabel>
                <Fields
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Phone Number.."
                />
              </FlexColumn>
              <FlexColumn>
                <StyledLabel htmlFor="country">Country:</StyledLabel>
                <StyledSelect
                  id="country"
                  name="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="">Select a country</option>
                  {countriesData.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </StyledSelect>
              </FlexColumn>
              <FlexColumn>
                <StyledLabel htmlFor="tel">Area of Interest*:</StyledLabel>
                <Fields
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Area of Interest.."
                />
              </FlexColumn>
              <FlexColumn>
                <StyledLabel htmlFor="tel">Reason to Contact Us:</StyledLabel>
                <ReasonTextArea
                  id="reason"
                  name="reason"
                  placeholder="Reason to Contact Us..."
                />
              </FlexColumn>
            </TextFields>
            <SubmitButton>Submit</SubmitButton>
          </Leftdiv>
          <Rightdiv>
            <CallUsWrapper>
              <CallUsText>Call Us:</CallUsText>
              <PhoneNumber>076 058 1244</PhoneNumber>
            </CallUsWrapper>
            <BlueLine />
            <CallUsWrapper>
              <CallUsText>Mail Us:</CallUsText>
              <PhoneNumber>zynovatex@gmail.com</PhoneNumber>
            </CallUsWrapper>
            <BlueLine />
            <CallUsWrapper>
              <CallUsText>Address :</CallUsText>
              <PhoneNumber>Sri Lanka</PhoneNumber>
            </CallUsWrapper>
            <BlueLine />
          </Rightdiv>
        </GrayDivCont>
      </Container>
    </div>
  );
};

export default ContactTop;
