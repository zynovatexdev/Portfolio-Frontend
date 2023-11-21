import BlogImage from "../image/blogimage.png";
import { Grid, Stack, Button, Box } from "@mui/material";
import { Bot } from "../styles/pages/Blog";
import BlogTop from "../components/page/Blog/BlogTop";
import { BlogCards } from "../components/page/Blog/BlogCards";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import Help from "../../src/image/Help.png";

const Blog = () => {
  return (
    <div>
      <BlogTop />
      <Bot src={Help} alt="help" />
      <Box mr={"5%"} ml={"5%"}>
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
      </Box>
      <Stack direction={"row"} justifyContent={"space-between"} ml={5} mr={5}>
        <Button variant={"text"} startIcon={<WestIcon />}>
          Previous Page
        </Button>
        <Button variant={"text"} endIcon={<EastIcon />}>
          Next Page
        </Button>
      </Stack>
    </div>
  );
};

export default Blog;
