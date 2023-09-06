import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { Card, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import "./messages.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  function sendMessage() {
    if (messageInput.trim() === "") return;
    const newMessage = {
      content: messageInput,
      timestamp: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setShowMessage(true);
  }

  function handleKeyPress(event) {
    event.preventDefault();
    if (event.key === "Enter") {
      console.log("keys pressed");
      sendMessage();
      setMessageInput("");
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
        <Grid container spacing={2} columns={16}>
          <Grid item xs={6} sx={{ minHeight: 620 }}>
            <Item>
              <Stack spacing={3} className={Stack}>
                <Item sx={{ p: 2 }}>Item 1</Item>
                <Item sx={{ p: 2 }}>Item 2</Item>
                <Item sx={{ p: 2 }}>Item 3</Item>
                <Item sx={{ p: 2 }}>Item 3</Item>
                <Item sx={{ p: 2 }}>Item 3</Item>
                <Item sx={{ p: 2 }}>Item 3</Item>
                <Item sx={{ p: 2 }}>Item 3</Item>
                <Item sx={{ p: 2 }}>Item 3</Item>
                <Item sx={{ p: 2 }}>Item 3</Item>
                <Item sx={{ p: 2 }}>Item 3</Item>
                <Item sx={{ p: 2 }}>Item 3</Item>
              </Stack>
            </Item>
          </Grid>

          {/* chat section */}
          <Grid item xs={10}>
            <Item>
              <Card
                sx={{
                  minWidth: 275,
                  mb: 3,
                  p: 3,
                  border: "1px",
                  borderColor: "red",
                }}
              >
                hello
              </Card>
              <Box sx={{ flexGrow: 1, minHeight: 500 }}>
                {messages.map((message) => {
                  <Card sx={{ p: 1.5, m: 1.2 }}>
                    <Typography> {showMessage && messageInput} </Typography>
                  </Card>;
                  <span className="message-timestamp">
                    {formatTimestamp(message.timestamp)}
                  </span>;
                })}
              </Box>
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
