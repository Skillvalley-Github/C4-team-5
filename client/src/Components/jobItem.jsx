import React from "react";
import { Stack, Typography, Chip, Paper, styled } from "@mui/material";
import { Skills } from "../pages/Projects";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Job(props) {
  const skills = ['google chrome extension', 'Javascript']
  return (
    <>
      <Item sx={{ m: 2, p: 2, display: "block" }}>
        <Stack direction={"row"}>
          <Typography sx={{ display: "flex", color: "green", lineHeight: 5 }}>
            Google Chrome Extension Developer - Javascript Widget - Various
            Fixes
            {props.jobTitle}
          </Typography>
        </Stack>
        <Stack direction={"row"}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            ipsum architecto exercitationem, eaque quis ratione harum numquam
            vero qui quasi inventore pariatur repudiandae! Doloremque incidunt,
            tenetur alias sed quis possimus. Fuga perferendis adipisci tempore.
            {props.jobDescription}
          </Typography>
        </Stack>
        <Stack direction={"row"}>
          <div className="skills">
            
            <Chip label='google chrome extension' sx={{ m: 2 }} />
            <Chip label="Javascript" />
          </div>
        </Stack>

      
        <Stack direction={"row"}>
          <Typography sx={{ fontSize: "15px", ml: 2 }}> $8K</Typography>
          <Typography sx={{ fontSize: "15px", ml: 2 }}>Remote</Typography>
        </Stack>
      </Item>
    </>
  );
}

export default Job;
