import React from "react";
import ProfileImg from "../../../image/Ellipse 7.png";
import { Typography, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

export const ProfileTag = () => {
  const date = grey[600];
  return (
    <div>
      <Stack spacing={2} direction={"row"} mt={2}>
        <img src={ProfileImg} alt="Profile Tag" />
        <Stack direction={"column"} paddingTop={1}>
          <Typography variant="body1">Name namename</Typography>
          <Typography variant="caption" color={date}>
            May 15,2022
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};
