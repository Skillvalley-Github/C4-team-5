import React from "react";
import Box from "@mui/material/Box";
import "./messageContainer.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

function MessageContainer({messages}) {
  return (
    <>
      <Box sx={{ flexGrow: 1, minHeight: 480 }} className="messages">
        <div className="message owner">
          {/* <Item className="messageInfo">
                    {messages && messages.map((messageInput) => {
                      {
                        console.log(messageInput);
                        <span>{messageInput}</span>;
                      }
                    })}
                    </Item> */}
          {messages.map((msg) => {
            <Item className="messageInfo">
              console.log(msg);
              <span>{msg}</span>
            </Item>;
          })}

          <Item className="messageContent">
            <span>I am fine</span>
          </Item>
        </div>
      </Box>
    </>
  );
}

export default MessageContainer;
