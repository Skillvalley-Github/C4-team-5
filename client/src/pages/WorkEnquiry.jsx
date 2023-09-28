import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Stack,
  Card,
  TextField,
  Paper,
  Avatar,
  Typography,
} from "@mui/material";
import "./WorkEnquiry.css";
import supabase from "../supabase";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function WorkEnquiry() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  // const inputRef = useRef(messageInput);
  // const [input, setInput] = useState("");

  async function sendMessage() {
    if (messageInput.trim() === "") return;
    const newMessage = {
      content: messageInput,
      timestamp: new Date().toISOString(),
    };
    setMessages((messages) => [...messages, messageInput]);
    console.log(messages, messageInput);

    // console.log(supabase);

    // backend connection

    const { data: messages, error } = await supabase
      .from("messages")
      .upsert([{ content: messageInput }])
      .select();

    // if (error) {
    //   console.log("error in sending data to the supabase ", error);
    // } else if (data) {
    //   console.log(data);
    // }
  }

  function handleKeyPress(event) {
    event.preventDefault();
    if (event.key === "Enter") {
      console.log("keys pressed");
      sendMessage();
      setMessageInput("");
      // setShowMessage(true);

      // console.log("input ref:", inputRef.current.value);
      // setInput(inputRef.current.value);
    }
  }

  const formatTimestamp = (timestamp) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(timestamp).toLocaleString(undefined, options);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* contact list */}
        <Grid container spacing={2} columns={16} className="GridScroll">
          <Grid item xs={6} sx={{ minHeight: "100vh" }}>
            <Item sx={{ minHeight: "90vh" }}>
              <Stack spacing={3}>
                <Item
                  sx={{
                    p: 4,
                    height: 35,
                    display: "flex",
                    // flexDirection: "column",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ position: "relative", left: "10%" }}
                  >
                    Shreyash
                  </Typography>
                </Item>
                <Item
                  sx={{
                    p: 4,
                    height: 35,
                    display: "flex",
                    // flexDirection: "column",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ position: "relative", left: "10%" }}
                  >
                    Subhransu
                  </Typography>
                </Item>
                <Item
                  sx={{
                    p: 4,
                    height: 35,
                    display: "flex",
                    // flexDirection: "column",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ position: "relative", left: "10%" }}
                  >
                   Sandeep
                  </Typography>
                </Item>
                <Item
                  sx={{
                    p: 4,
                    height: 35,
                    display: "flex",
                    // flexDirection: "column",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ position: "relative", left: "10%" }}
                  >
                    Balaji
                  </Typography>
                </Item>
              </Stack>
            </Item>
          </Grid>

          {/* chat section */}
          <Grid item xs={10}>
            <Item>
              <Card
                sx={{
                  minWidth: 275,
                  mb: 2,
                  p: 2,
                  border: "1px",
                  borderColor: "red",
                }}
                className="topBar"
              >
                <span className="clientName">Naman</span>
                <span className="clientCompany">Company Name</span>
              </Card>

              <Grid container spacing={0} columns={10}>
                <Grid item xs={6}>
                  <Stack direction="row" spacing={0} xs={6}>
                    <Item sx={{ pr: 8 }}></Item>
                    <Item>
                      <Card sx={{ minWidth: 670 }}>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          sx={{ minWidth: 670 }}
                          value={messageInput}
                          onChange={(e) => {
                            setMessageInput(e.target.value);
                          }}
                          onKeyUp={handleKeyPress}
                        />
                      </Card>
                    </Item>
                    <Item>{/* <img src={sendBtn} alt="" /> */}</Item>
                  </Stack>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default WorkEnquiry;
