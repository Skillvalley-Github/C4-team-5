import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Button, Container, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

//images
import linkedIn from "../SVGs/linkedin.png";
import web from "../SVGs/web.png";
import twitter from "../SVGs/twitter.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Profile() {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Item
            style={{
              // backgroundColor: "	#D0F0C0",
              borderRadius: "10px ",
              width: 800,
            }}
          >
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 150, height: 150 }}
              />
              <Container>
                <Stack direction="column" spacing={2}>
                  <Typography style={{ fontSize: 40, color: "black" }}>
                    Shohidur Rehman
                  </Typography>
                  <div className="icon">
                    <img src={web} alt="" style={{ width: 20, margin: 10 }} />
                    <img
                      src={linkedIn}
                      alt=""
                      style={{ width: 20, margin: 10 }}
                    />
                    <img
                      src={twitter}
                      alt=""
                      style={{ width: 20, margin: 10 }}
                    />
                    <Button variant="contained" style={{ margin: 6 }}>
                      {" "}
                      Message{" "}
                    </Button>
                    <Button variant="contained" style={{ margin: 6 }}>
                      {" "}
                      Share{" "}
                    </Button>
                  </div>
                </Stack>
              </Container>
            </Stack>
          </Item>
        </Box>
      </Container>
    </>
  );
}
