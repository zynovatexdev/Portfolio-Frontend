import { Box, Card, CardActions, Button, CardMedia } from "@mui/material";
import {
  CardContent,
  CardTitle,
  CardText,
  CardSubText,
} from "../../../styles/pages/Blog";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { lightBlue } from "@mui/material/colors";

export const BlogCards = (props) => {
  const { imageUrl, title, text, subtext } = props;
  const read = lightBlue[500];

  return (
    <Box style={{ width: "300px" }}>
      <Card style={{ borderRadius: 30 }}>
        <CardMedia>
          <img src={imageUrl} alt={`${title} image`} width={300} />
        </CardMedia>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
          <CardSubText>{subtext}</CardSubText>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to="/blog-more"
            variant="text"
            endIcon={<ArrowForwardIcon />}
          >
            Read Now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
