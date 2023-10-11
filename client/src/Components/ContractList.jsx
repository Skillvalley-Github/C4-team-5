import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { useState } from "react";

function ContractList(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const mystyle = {
    backgroundColor: isHovering ? "#E8E8E8" : "white",
  };

  return (
    <>
      <ListItem
        style={mystyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ListItemAvatar>
          <Avatar>{/* <ImageIcon /> */}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.companyName}
          secondary={props.sendingDate}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default ContractList;
