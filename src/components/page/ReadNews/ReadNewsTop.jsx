import React from "react";
import {
  Top,
  Text,
  TextMob,
  TopBackgroundMob,
  NewsTopic,
  NewsContentDtl,
  NewsContentTopic,
  NewsContent,
  Discription,
  StyledLink,
  TopBackground,
  BackIosIcon,
  DiscriptionContent,
  SubTopic,
  ReadNewsTopCon,
} from "../../../styles/pages/newsread";
import Newsimg from "../../../image/OurProduct.png";
const ReadNewsTop = () => {
  return (
    <ReadNewsTopCon>
      <Top>
        <StyledLink to="/news">
          <BackIosIcon />
        </StyledLink>
        <NewsTopic>ZYNOVATEX announces a new product launch</NewsTopic>
      </Top>
      <Discription>
        <DiscriptionContent>
          We're thrilled to present our latest innovation, the Wedding Planning
          Solution, designed to your special day to new heights. This
          comprehensive solution gives couples a seamless and enjoyable wedding
          planning experience, both online and offline.
        </DiscriptionContent>
      </Discription>
      <TopBackground>
        <img src={Newsimg} alt="" />
        <div></div>
        <Text>
          Our dedicated team has poured creativity and expertise into developing
          a solution that simplifies wedding planning. From venue selection to
          seating arrangements, our Wedding Planning Solution offers a
          comprehensive set of tools to make your journey to the altar
          unforgettable.
        </Text>
      </TopBackground>
      <TopBackgroundMob>
        <img src={Newsimg} alt="" />

        <TextMob>
          Our dedicated team has poured creativity and expertise into developing
          a solution that simplifies wedding planning. From venue selection to
          seating arrangements, our Wedding Planning Solution offers a
          comprehensive set of tools to make your journey to the altar
          unforgettable.
        </TextMob>
      </TopBackgroundMob>
      <NewsContent>
        <NewsContentDtl>
          We're thrilled to present our latest innovation, the Wedding Planning
          Solution, designed to elevate your special day to new heights. This
          comprehensive solution brings couples a seamless and enjoyable wedding
          planning experience, both online and offline. Our dedicated team has
          poured creativity and expertise into developing a solution that
          simplifies wedding planning. From venue selection to seating
          arrangements, our Wedding Planning Solution offers a comprehensive set
          of tools to make your journey to the altar unforgettable.<br></br>
          <br></br>
          Our dedicated team has poured creativity and expertise into developing
          a solution that simplifies wedding planning. From venue selection to
          seating arrangements, our Wedding Planning Solution offers a
          comprehensive set of tools to make your journey to the altar
          unforgettable.<br></br>
          <br></br>
          We're thrilled to present our latest innovation, the Wedding Planning
          Solution, designed to elevate your special day to new heights. This
          comprehensive solution brings couples a seamless and enjoyable wedding
          planning experience, both online and offline. Our dedicated team has
          poured creativity and expertise into developing a solution that
          simplifies wedding planning. From venue selection to seating
          arrangements, our Wedding Planning Solution offers a comprehensive set
          of tools to make your journey to the altar unforgettable.<br></br>
          <br></br>
          We're thrilled to present our latest innovation, the Wedding Planning
          Solution, designed to elevate your special day to new heights. This
          comprehensive solution brings couples a seamless and enjoyable wedding
          planning experience, both online and offline. Our dedicated team has
          poured creativity and expertise into developing a solution that
          simplifies wedding planning. From venue selection to seating
          arrangements, our Wedding Planning Solution offers a comprehensive set
          of tools to make your journey to the altar unforgettable.
        </NewsContentDtl>
        <NewsContentTopic>Key features</NewsContentTopic>
        <NewsContentDtl>
          Our Wedding Planning Solution serves as your personal companion,
          guiding you through each planning step. It offers an interactive
          planning dashboard to keep you on top of tasks, budgets, and
          timelines. Effortlessly communicate with vendors, compare quotes, and
          manage contracts. Track RSVPs, seating preferences, and dietary needs
          with ease. Choose from elegant themes that match your wedding's
          aesthetic.
        </NewsContentDtl>
        <NewsContentTopic>Join us</NewsContentTopic>
        <NewsContentDtl>
          Join our live webinar on August 20th to discover the solution's
          features and gain expert insights into seamless wedding planning.
          Register now and step into your wedding journey with confidence.
        </NewsContentDtl>
        <NewsContentTopic>Stay informed</NewsContentTopic>
        <NewsContentDtl>
          Stay connected to explore stories from couples who've successfully
          realized their wedding visions using our solution. Our news section
          keeps you updated on wedding trends, real-life experiences, and expert
          advice.
        </NewsContentDtl>
      </NewsContent>
    </ReadNewsTopCon>
  );
};

export default ReadNewsTop;
