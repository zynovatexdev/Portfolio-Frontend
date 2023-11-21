import styled from "styled-components";
import ContactBackground from "../../Images/ContactBackground.png";
import applicationbg from "../../image/applicationbg.png";

export const ImageContainer = styled.div`
  position: relative;
  width: 98.9vw;z
  height: 97vh;
  top: 3vh;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 400px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageText = styled.div`
  position: absolute;
  width: 40%;
  font-size: 24px;
  font-family: "PT Serif", serif;
  color: white;
  transform: translateY(-50%);
  margin-left: 5vw;
  margin-top: -55vh;

  @media screen and (max-width: 768px) {
    padding: 0px 40px 0px 0px;
    width: 100%;
    height: 100%;
    margin-top: -100px;

    h1 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
      width: 100%;
      height: 100%;
      padding: 10px 0px;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    margin-top: -100px;
    padding: 0px 40px 0px 0px;

    h1 {
      font-size: 18px;
      padding: 10px 0px;
    }
    p {
      padding: 10px 0px;
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 70%; /* Adjust the vertical position of the button */
  left: 11%; /* Center the button horizontally */
  transform: translate(
    -50%,
    -50%
  ); /* Center the button both vertically and horizontally */
  padding: 10px 20px;
  font-size: 18px;
  background-color: #fff;
  color: black;
  border: none;
  cursor: pointer;
  z-index: 2; /* Set a higher z-index to place the button above the image text */

  @media screen and (max-width: 768px) {
    /* Adjust the position of the button on smaller screens */
    margin-bottom: 60px;
    margin-left: 50px;
  }

  @media screen and (max-width: 600px) {
    /* Adjust the position of the button on smaller screens */
    margin-top: 60px;
    margin-left: 50px;
  }
`;

export const VacancyButton = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  font-size: 1em;
  margin: 1em 1em 1em 0em;
  padding: 0.5em 2em;
  border-radius: 6px;
  cursor: pointer;
`;

export const theme = {
  fg: "#101035",
  bg: "#CFCFD7",
};

export const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});

export const TableWrapper = styled.div`
  max-height: 52vh;
  overflow-y: auto;
  margin-top: 1vw;
  width: 100%;
`;

export const TableContainer = styled.div`
  position: relative;
  width: 100%;

  margin-right: 0px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;

  tbody {
    tr {
      align-items: center;
      background-color: #cfcfd7;
      display: flex;
      border-radius: 8px;
      margin-right: 5%;
      margin-bottom: 8px;

      td {
        padding: 1vh 2vh;
        background-color: #cfcfd7;
        &:first-child {
          font-weight: bold; /* Make the text in the first cell (position column) bold */
        }

        &:last-child {
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    tr {
      align-items: center;
      background-color: #cfcfd7;
      display: flex;
      flex-direction: column;

      td {
        background-color: #cfcfd7;
        &:first-child {
          padding-left: 3vh;
        }
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const ButtonOuterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Position = styled.div`
  width: 100%;
  height: 100%;
`;

export const DataType = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ClickButtons = styled.div`
  width: 100%;
  height: 100%;
`;

export const DivContainer = styled.div`
  margin-top: 3vw;
  margin-left: 5vw;
`;

export const Styleh1 = styled.h1`
  color: #101035;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BlueDiv = styled.div`
  background-color: #101035;
  width: 98.8vw;
  height: 30vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 5vh;
  text-align: justify;
  text-justify: inter-word;

  p {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    padding: 40px;
    p {
      width: 100%;
    }
  }
`;

export const GrayDiv = styled.div`
  background-image: url(${applicationbg});
  background-color: #101035;
  width: 60%;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: 5vh;
  position: relative;
  border-radius: 10px;
  box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    /* Adjust width and other styles for smaller screens */
    width: 90%;
    height: 100%;
  }
`;

export const StyledH1 = styled.h1`
  align-items: center;
  margin-top: 5vh;
  font-size: 2.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 1vh;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const Formdiv = styled.div`
  width: 100%;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  padding: 20px;
  padding-bottom: 0px;
  gap: 20px;
  position: relative;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
  }
`;
export const StylesInputs = styled.input`
  width: 100%;
  padding: 0.9vw;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const AdditionalInputWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  flex-direction: column;
`;

export const StyledInputs = styled.input`
  padding: 0.9vw;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const StyledLabels = styled.label`
  margin-bottom: 1vh;
  margin-top: 0px;
`;

export const FileInput = styled.input`
  display: none;
  padding: 0.9vw;
`;

export const DragDropArea = styled.div`
  height: 18vh;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #f2f2f2;
  border: none;
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ErrorText = styled.p`
  color: red;
  margin-left: 38vw;
  margin-top: -40vh;
`;

export const ApplyButton = styled.button`
  background-color: rgba(16, 16, 53, 1);
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 2em;
  border-radius: 6px;
  margin-top: 2rem;
  margin-left: 0;

  @media screen and (max-width: 768px) {
    /* Adjust margin for smaller screens */
    margin-left: 0;
  }
`;

// ----------------------SSE------------------------

export const GradientDiv2 = styled.div`
  background-image: linear-gradient(
    45deg,
    rgba(16, 16, 53, 1),
    rgba(255, 255, 255, 1)
  );
  width: 60vw;
  height: auto;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
  text-align: left;
  margin-top: 5vh;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    /* Adjust width and other styles for smaller screens */
    width: 90vw;
    height: auto;
    padding: 1rem; /* Changed padding to a fixed value */
  }
`;

export const Stylesh1 = styled.h1`
  margin-left: 8vh;
`;

export const RightContainer = styled.div`
  display: flex;
  height: auto;
  align-items: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8vh;
`;

export const HeadTitle = styled.h1``;

export const Styleh5 = styled.h5``;

export const Stylep = styled.p``;

export const Stylesp = styled.p``;

export const Image = styled.img`
  width: 25vw;
  bottom: 0;
  height: 35vh;
  display: flex;
`;

export const GrayCDiv = styled.div`
  background-color: #cfcfd7;
  width: 60vw;
  height: 100vh;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  margin-top: 5vh;
  position: relative;
  border-radius: 10px;
  box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    /* Adjust width and other styles for smaller screens */
    width: 90vw;
    height: auto;
  }
`;

export const List = styled.ul`
  margin-left: 8vh;
  margin-bottom: 2rem;
  margin-top: 1rem;

  & li {
    margin-bottom: 1rem; /* Add spacing between the li tags */
  }

  @media screen and (max-width: 768px) {
    li {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export const Enddiv = styled.div`
  width: 60vw;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  margin-top: 5vh;
  position: relative;
`;

export const ApplyyButton = styled.button`
  background-color: rgba(16, 16, 53, 1);
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 2em;
  border-radius: 6px;
  margin-top: 2rem;
  margin-left: 51vw;
`;

// --------------Contact---------------

export const Blue1Div = styled.div`
  background-color: #101035;
  width: 98.8vw;
  height: 20vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 0vh;

  @media screen and (max-width: 768px) {
    padding: 40px;

    h1 {
      padding: 10px 0px;
    }

    p {
      width: 100%;
    }
  }
`;

export const backgroundImageStyle = {
  backgroundImage: `url(${ContactBackground})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "120vh",
  width: "100%",
};

// Media query styles for screens with a maximum width of 768px
if (window.innerWidth <= 768) {
  backgroundImageStyle.height = "120vh";
}

export const Leftdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  h3 {
    width: 80%;
    margin-bottom: 10px;
    margin: 0;
    color: #101035;
  }
`;
export const Inputdiv = styled.div`
  width: 80%;
  display: flex;
  width: 33vw;
  justify-content: space-between;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 5vh;
  }
`;

export const TextFields = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Fields = styled.input`
  width: 80%;
  padding: 0.7vw 8vh;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  text-align: left;
  color: #101035;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const StyledSelect = styled.select`
  width: 80%;
  padding: 0.7vw 8vh;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #101035; /* Add the color property here */

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 80%;
  background-color: rgba(16, 16, 53, 1);
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  font-size: 1em;
  padding: 0.5em 2em;
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    margin-top: 0vh;
  }
`;

export const CallUsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CallUsText = styled.p`
  margin-right: 10px;
  color: #101035;
  font-weight: bold;
`;

export const PhoneNumber = styled.p`
  color: black;
`;

export const BlueLine = styled.div`
  width: 80%;
  margin: 10px 0;
  border-top: 2px solid #101035;
`;
export const Rightdiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10%;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-left: 10%;
    margin-top: 0;
  }
`;

export const GrayDivCont = styled.div`
  background-color: #cfcfd7;
  height: auto;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  margin-top: 10vh;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    /* Adjust width and other styles for smaller screens */
    flex-direction: column;
    width: 80%;
    margin-top: 3vh;
    padding: 0px;
  }
`;
export const ReasonTextArea = styled.textarea`
  width: 80%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  min-height: 100px;
  color: #101035;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 10vw;
  }
`;

export const StyledInput = styled.input`
  width: 80%;
  padding: 0.7vw 8vh;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:first-child {
    margin-right: 1rem; /* Add margin-right to the first input to create spacing */
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0;
    padding: 0.7vw;
  }
`;
