import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";
import Stack from '@mui/material/Stack';
import './messages.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Messages = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={6} sx={{ minHeight: 620 }}>
            <Item>
              {/* <Box sx={{ flexGrow: 1, minHeight: 570 }}>
                <Card sx={{ minWidth: 275, m: 2, p: 2 }}>hello</Card>
                <Card sx={{ minWidth: 275, m: 2, p: 2 }}>hello</Card>
                <Card sx={{ minWidth: 275, m: 2, p: 2 }}>hello</Card>
                <Card sx={{ minWidth: 275, m: 2, p: 2 }}>hello</Card>
                <Card sx={{ minWidth: 275, m: 2, p: 2 }}>hello</Card>
                <Card sx={{ minWidth: 275, m: 2, p: 2 }}>hello</Card>
                <Card sx={{ minWidth: 275, m: 2, p: 2 }}>hello</Card>
                <Card sx={{ minWidth: 275, m: 2, p: 2 }}>hello</Card>
              </Box> */}
              <Stack spacing={3} className={Stack} >
                <Item sx={{p:2}}>Item 1</Item>
                <Item sx={{p:2}}>Item 2</Item>
                <Item sx={{p:2}}>Item 3</Item>
                <Item sx={{p:2}}>Item 3</Item>
                <Item sx={{p:2}}>Item 3</Item>
                <Item sx={{p:2}}>Item 3</Item>
                <Item sx={{p:2}}>Item 3</Item>
                <Item sx={{p:2}}>Item 3</Item>
                <Item sx={{p:2}}>Item 3</Item>
                <Item sx={{p:2}}>Item 3</Item>
                <Item sx={{p:2}}>Item 3</Item>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={10}>
            <Item>
              <Card sx={{ minWidth: 275, mb: 3, p: 3 }}>hello</Card>
              <Box sx={{ flexGrow: 1, minHeight: 500 }}></Box>
              <Grid container spacing={0} columns={10}>
                <Grid item xs={6}>
                <Stack direction="row" spacing={0} xs={6}>
                  <Item></Item>
                  <Item></Item>
                  <Item></Item>
                </Stack>
                </Grid>
                
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
      {/* <div>Messages </div> */}
    </>
  );
};

export default Messages;
