import AboutTop from "../components/page/About/AboutTop";
import Crew from "../components/page/About/Crew";
import Achieve from "../components/page/About/Achieve";
import Directors from "../components/page/About/Directors";
import Developers from "../components/page/About/Developers";
import { AboutContainer } from "../styles/pages/about";

const About = () => {
  return (
    <AboutContainer>
      <AboutTop />
      <Crew />
      <Directors />
      <Developers />
      <Achieve />
    </AboutContainer>
  );
};

export default About;
