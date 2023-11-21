import React from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Typography, Stack, IconButton, Menu, MenuItem } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import LinkIcon from "@mui/icons-material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ButtonStack } from "../../../styles/pages/Blog";

export const ButtonBar = () => {
  const [like, setLike] = React.useState(0),
    [isLike, setIsLike] = React.useState(false),
    [dislike, setDislike] = React.useState(0),
    [isDislike, setIsDislike] = React.useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike ? -1 : 1));
      setIsLike(!isLike);
    };

  const onDislikeButtonClick = () => {
    setDislike(dislike + (isDislike ? -1 : 1));
    setIsDislike(!isDislike);
  };

  return (
    <ButtonStack>
      <Stack spacing={2} direction={"row"}>
        <IconButton aria-label="Like" onClick={onLikeButtonClick}>
          <ThumbUpOutlinedIcon />
          <Typography>{like}</Typography>
        </IconButton>
        <IconButton aria-label="Dislike" onClick={onDislikeButtonClick}>
          <ThumbDownOutlinedIcon />
          <Typography>{dislike}</Typography>
        </IconButton>
        <IconButton aria-label="Message">
          <HiOutlineChatBubbleLeftRight />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <IconButton aria-label="Save">
          <BookmarksOutlinedIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <IosShareOutlinedIcon />
        </IconButton>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <IconButton aria-label="More" {...bindTrigger(popupState)}>
                <MoreHorizOutlinedIcon />
              </IconButton>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onClick={popupState.close}
                  style={{ backgroundColor: "rgba(231, 227, 227, 0.5)" }}
                >
                  <LinkIcon style={{ paddingRight: "10px" }} />
                  Copy link
                </MenuItem>
                <hr />
                <MenuItem
                  onClick={popupState.close}
                  style={{ backgroundColor: "rgba(231, 227, 227, 0.5)" }}
                >
                  <FacebookIcon style={{ paddingRight: "10px" }} /> Share on
                  Facebook
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  style={{ backgroundColor: "rgba(231, 227, 227, 0.5)" }}
                >
                  <LinkedInIcon style={{ paddingRight: "10px" }} /> Share on
                  Linkedin
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  style={{ backgroundColor: "rgba(231, 227, 227, 0.5)" }}
                >
                  <TwitterIcon style={{ paddingRight: "10px" }} /> Share on
                  Twitter
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </Stack>
    </ButtonStack>
  );
};
