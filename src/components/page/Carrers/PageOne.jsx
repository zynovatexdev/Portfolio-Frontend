import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import headerImage from "../../../Images/header.png";
import {
  ImageContainer,
  StyledImage,
  ImageText,
  Button,
  ButtonContainer,
  VacancyButton,
  theme,
  invertTheme,
  TableWrapper,
  TableContainer,
  Table,
  DivContainer,
  Styleh1,
  Position,
  DataType,
  ClickButtons,
  ButtonOuterContainer,
} from "../../../styles/pages/Carees";

const vacanciesData = [
  {
    position: "Senior Software Engineer",
    type: "Full Time",
    mode: "Online",
    id: 1,
  },

  {
    position: "UI/UX Engineer",
    type: "Full Time",
    mode: "Online",
    id: 2,
  },

  {
    position: "Product Manager",
    type: "Full Time",
    mode: "Online",
    id: 3,
  },

  {
    position: "Business Analyst",
    type: "Full Time",
    mode: "Online",
    id: 4,
  },

  // {
  //     position: 'Intern',
  //     type: 'Full Time',
  //     mode: 'Online',
  //     id: 5,
  // },
];

const PageOne = () => {
  return (
    <div>
      <ImageContainer>
        <StyledImage src={headerImage} alt="Career Image" />
        <ImageText>
          <h1>We are offering tremendous career opportunities</h1>
          <p>
            Join Our Dynamic Team : Explore Exciting Career Opportunities.
            Discover a world of possibilities with us. We're passionate about
            fostering growth, innovation, and professional development. Take the
            next step in your career journey with us
          </p>
        </ImageText>
        <Button>Open Vacancies</Button>
      </ImageContainer>
      <DivContainer>
        <Styleh1>Open Vacancies</Styleh1>
        <TableWrapper>
          <TableContainer>
            <Table>
              <tbody>
                {vacanciesData.map((data) => (
                  <tr key={data.id}>
                    <Position>
                      <td>{data.position}</td>
                    </Position>
                    <DataType>
                      <td>{data.type}</td>
                      <td>{data.mode}</td>
                    </DataType>
                    <ClickButtons>
                      <td>
                        <ThemeProvider theme={theme}>
                          <ButtonContainer>
                            <Link to="/sse">
                              <VacancyButton>View Details</VacancyButton>
                            </Link>
                            <ThemeProvider theme={invertTheme}>
                              <Link to="/carrers-apply">
                                <VacancyButton>Apply Now</VacancyButton>
                              </Link>
                            </ThemeProvider>
                          </ButtonContainer>
                        </ThemeProvider>
                      </td>
                    </ClickButtons>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        </TableWrapper>
      </DivContainer>
      <DivContainer>
        <Styleh1>Perks & Benefits</Styleh1>
      </DivContainer>
    </div>
  );
};

export default PageOne;
