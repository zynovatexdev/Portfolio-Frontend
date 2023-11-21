import React, { useState } from "react";
import {
  GrayDiv,
  StyledH1,
  StyledLabel,
  StylesInputs,
  FlexColumn,
  Formdiv,
  AdditionalInputWrapper,
  StyledInputs,
  StyledLabels,
  FileInput,
  DragDropArea,
  ErrorContainer,
  ErrorText,
  ApplyButton,
} from "../../../styles/pages/Carees";

const Application = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const allowedFileTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
  ];

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && allowedFileTypes.includes(file.type)) {
      setSelectedFile(file);
      setErrorMessage("");
    } else {
      setSelectedFile(null);
      setErrorMessage("Please upload only PDF files.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && allowedFileTypes.includes(file.type)) {
      setSelectedFile(file);
      setErrorMessage("");
    } else {
      setSelectedFile(null);
      setErrorMessage("Please upload only PDF files.");
    }
  };

  return (
    <>
      <StyledH1>Application</StyledH1>
      <GrayDiv>
        <Formdiv>
          <FlexColumn>
            <StyledLabel htmlFor="fname">First Name:</StyledLabel>
            <StylesInputs
              type="text"
              id="fname"
              name="firstname"
              placeholder="First Name.."
            />
          </FlexColumn>
          <FlexColumn>
            <StyledLabel htmlFor="lname">Last Name:</StyledLabel>
            <StylesInputs
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name.."
            />
          </FlexColumn>
        </Formdiv>
        <AdditionalInputWrapper>
          <FlexColumn>
            <StyledLabel htmlFor="email">Email Address:</StyledLabel>
            <StyledInputs
              type="email"
              id="email"
              name="email"
              placeholder="Email Address.."
            />
          </FlexColumn>
        </AdditionalInputWrapper>
        <AdditionalInputWrapper>
          <FlexColumn>
            <StyledLabel htmlFor="tel">Phone Number:</StyledLabel>
            <StyledInputs
              type="tel"
              id="tel"
              name="tel"
              placeholder="Phone Number.."
            />
          </FlexColumn>
        </AdditionalInputWrapper>

        <AdditionalInputWrapper>
          <StyledLabels htmlFor="file">Upload Your Resume</StyledLabels>
          <FileInput type="file" id="file" onChange={handleFileSelect} />
          <label htmlFor="file">
            <DragDropArea onDragOver={handleDragOver} onDrop={handleDrop}>
              {selectedFile
                ? selectedFile.name
                : "Choose file or drag here Files must be less than 10 MB Allowed file types: pdf, docx, doc, txt"}
            </DragDropArea>
          </label>

          {errorMessage && (
            <ErrorContainer>
              <ErrorText>{errorMessage}</ErrorText>
            </ErrorContainer>
          )}
        </AdditionalInputWrapper>

        <AdditionalInputWrapper>
          <FlexColumn>
            <StyledLabels htmlFor="desc">
              Why do you think you would be a good fit for our team?
            </StyledLabels>
            <StyledInputs
              type="text"
              id="tel"
              name="desc"
              placeholder="Your Answer.."
            />
          </FlexColumn>
        </AdditionalInputWrapper>

        <ApplyButton>Submit</ApplyButton>
      </GrayDiv>
    </>
  );
};

export default Application;
