import React from "react";
import BusinessLady from "../../../Images/BusinessLady.png";
import { Link } from "react-router-dom";
import SSEHead from "./SSEHead";
import {
  Container,
  GradientDiv2,
  Stylesh1,
  Styleh5,
  Stylep,
  Image,
  GrayCDiv,
  List,
  Enddiv,
  ApplyyButton,
  HeadTitle,
  Stylesp,
  RightContainer,
  LeftContainer,
} from "../../../styles/pages/Carees";

const SSE = () => {
  return (
    <Container>
      <SSEHead />
      <GradientDiv2>
        <LeftContainer>
          <HeadTitle>About this position</HeadTitle>
          <br></br>
          <Styleh5>
            Date Published: July 13, 2023 <br></br>
            Application Deadline: September 15, 2023
          </Styleh5>
          <br></br>
          <Stylesp>
            Are you an experienced and skilled software engineer looking for a
            new challenge? We are currently seeking Senior Software Engineer to
            join our dynamic team and contribute to our innovative projects. As
            a Senior Software Engineer, you will have the opportunity t0 lead
            technical initiatives, collaborate with cross-functional teams, and
            drive the development of high-quality software solutions.
          </Stylesp>
        </LeftContainer>
        <RightContainer>
          <Image src={BusinessLady} alt="Career Image" />
        </RightContainer>
      </GradientDiv2>
      <GrayCDiv>
        <Stylesh1>Responsibilities:</Stylesh1>
        <Stylep>
          <List>
            <li>
              Designing, coding, and testing high-quality software solutions
              that meet project requirements
            </li>
            <li>
              Collaborating with cross-functional teams to define and implement
              technical solutions
            </li>
            <li>
              Leading and mentoring junior engineers, providing guidance and
              support
            </li>
            <li>
              Conducting code reviews to ensure adherence to coding standards
              and best practices
            </li>
            <li>
              Participating in architectural discussions and contributing to
              technical decision-making processes
            </li>
            <li>
              Troubleshooting and resolving complex software issues in a timely
              manner
            </li>
            <li>
              Keeping up-to-date with emerging technologies and industry trends
            </li>
          </List>
        </Stylep>

        <Stylesh1>Requirements:</Stylesh1>
        <Stylep>
          <List>
            <li>
              Bachelor's or Master's degree in Computer Science or a related
              field{" "}
            </li>
            <li>
              2+ years of professional experience in software development{" "}
            </li>
            <li>
              Proficiency in multiple programming languages, such as Java, C++,
              or Python
            </li>
            <li>
              Strong knowledge of software development methodologies and best
              practices Experience with software architecture and design
              principles
            </li>
            <li>Demonstrated ability to lead and mentor a team</li>
            <li>Excellent problem-solving and analytical skills </li>
            <li>Effective communication and collaboration abilities</li>
          </List>
        </Stylep>
      </GrayCDiv>

      <Enddiv>
        <p>
          Join our team of talented software engineers and contribute to our
          cutting-edge projects. As a Senior Software Engineer, you will have
          the opportunity to make a significant impact, drive technical
          excellence, and shape the future of our company.
        </p>
        <br></br>
        <p>Apply now and take your career to new heights with ZYNOVATEX.</p>
      </Enddiv>
      <Link to="/carrers-apply">
        <ApplyyButton>Apply Now</ApplyyButton>
      </Link>
    </Container>
  );
};

export default SSE;
