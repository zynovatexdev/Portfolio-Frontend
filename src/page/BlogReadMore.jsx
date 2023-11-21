import React from "react";
import { ReadMiddle, RMBlogs, Bot } from "../styles/pages/Blog";
import BlogHeader from "../image/BlogMoreHeader.png";
import BlogMoreImage from "../image/BlogMoreImage.png";
import BlogImage from "../image/blogimage.png";
import { Typography, Grid, Box } from "@mui/material";
import { ButtonBar } from "../components/page/Blog/ButtonBar";
import { BlogCards } from "../components/page/Blog/BlogCards";
import Help from "../../src/image/Help.png";
import { ProfileTag } from "../components/page/Blog/ProfileTag";

export const BlogReadMore = () => {
  return (
    <Box mr={"5%"} ml={"5%"}>
      <img src={BlogHeader} alt="blog header" style={{ width: "100%" }} />
      <Bot src={Help} alt="help" />
      <Typography variant="h5" mt={5}>
        <span style={{ fontWeight: "bold" }}>Artificial Intelligence:</span>{" "}
        Simulation of human intelligence in machine learning
      </Typography>
      <ProfileTag />
      <ButtonBar />
      <Typography variant="body1" mt={5}>
        Artificial Intelligence: Simulation of human intelligence in machine
        learning. Artificial Intelligence: Simulation of human intelligence in
        machine learning. Artificial Intelligence: Simulation of human
        intelligence in machine learning.Artificial Intelligence: Simulation of
        human intelligence in machine learning.Artificial Intelligence:
        Simulation of human intelligence in machine learning.Artificial
        Intelligence: Simulation of human intelligence in machine
        learning.Artificial Intelligence: Simulation of human intelligence in
        machine learning.
      </Typography>
      <Typography variant="h5" mt={5}>
        <span style={{ fontWeight: "bold" }}>Artificial Intelligence</span>
      </Typography>
      <Typography variant="body1" mt={5}>
        Artificial Intelligence: Simulation of human intelligence in machine
        learning. Artificial Intelligence: Simulation of human intelligence in
        machine learning.Artificial Intelligence: Simulation of human
        intelligence in machine learning.Artificial Intelligence: Simulation of
        human intelligence in machine learning.Artificial Intelligence:
        Simulation of human intelligence in machine learning.Artificial
        Intelligence: Simulation of human intelligence in machine
        learning.Artificial Intelligence: Simulation of human intelligence in
        machine learning.
      </Typography>
      <ReadMiddle>
        <img src={BlogMoreImage} alt="blog middle" style={{ width: "100%" }} />
      </ReadMiddle>
      <Typography variant="body1" mt={5}>
        Artificial Intelligence: Simulation of human intelligence in machine
        learning. Artificial Intelligence: Simulation of human intelligence in
        machine learning.Artificial Intelligence: Simulation of human
        intelligence in machine learning.Artificial Intelligence: Simulation of
        human intelligence in machine learning.Artificial Intelligence:
        Simulation of human intelligence in machine learning.Artificial
        Intelligence: Simulation of human intelligence in machine
        learning.Artificial Intelligence: Simulation of human intelligence in
        machine learning.
      </Typography>
      <Typography variant="h5" mt={5}>
        <span style={{ fontWeight: "bold" }}>Artificial Intelligence</span>
      </Typography>
      <Typography variant="body1" mt={5}>
        Artificial Intelligence: Simulation of human intelligence in machine
        learning. Artificial Intelligence: Simulation of human intelligence in
        machine learning.Artificial Intelligence: Simulation of human
        intelligence in machine learning.Artificial Intelligence: Simulation of
        human intelligence in machine learning.Artificial Intelligence:
        Simulation of human intelligence in machine learning.Artificial
        Intelligence: Simulation of human intelligence in machine
        learning.Artificial Intelligence: Simulation of human intelligence in
        machine learning.
      </Typography>
      <ButtonBar />
      <Typography variant="h5" mt={5}>
        <span style={{ fontWeight: "bold" }}>
          More from this blogger (name)
        </span>
      </Typography>
      <RMBlogs>
        <Grid container rowSpacing={10}>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
          >
            <BlogCards
              imageUrl={BlogImage}
              title="Artificial Intelligence"
              text="Simulation of human intelligence in machine learning"
              subtext="name name"
            />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
          >
            <BlogCards
              imageUrl={BlogImage}
              title="Artificial Intelligence"
              text="Simulation of human intelligence in machine learning"
              subtext="name name"
            />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
          >
            <BlogCards
              imageUrl={BlogImage}
              title="Artificial Intelligence"
              text="Simulation of human intelligence in machine learning"
              subtext="name name"
            />
          </Grid>
        </Grid>
      </RMBlogs>

      <Typography variant="h5" mt={5}>
        <span style={{ fontWeight: "bold" }}>Recommend for you</span>
      </Typography>
      <RMBlogs>
        <Grid container rowSpacing={10} mb={10}>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
          >
            <BlogCards
              imageUrl={BlogImage}
              title="Artificial Intelligence"
              text="Simulation of human intelligence in machine learning"
              subtext="name name"
            />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
          >
            <BlogCards
              imageUrl={BlogImage}
              title="Artificial Intelligence"
              text="Simulation of human intelligence in machine learning"
              subtext="name name"
            />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
          >
            <BlogCards
              imageUrl={BlogImage}
              title="Artificial Intelligence"
              text="Simulation of human intelligence in machine learning"
              subtext="name name"
            />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
          >
            <BlogCards
              imageUrl={BlogImage}
              title="Artificial Intelligence"
              text="Simulation of human intelligence in machine learning"
              subtext="name name"
            />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
          >
            <BlogCards
              imageUrl={BlogImage}
              title="Artificial Intelligence"
              text="Simulation of human intelligence in machine learning"
              subtext="name name"
            />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
          >
            <BlogCards
              imageUrl={BlogImage}
              title="Artificial Intelligence"
              text="Simulation of human intelligence in machine learning"
              subtext="name name"
            />
          </Grid>
        </Grid>
      </RMBlogs>
    </Box>
  );
};
