import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

function ContractList(props) {
  return (
    <>
      <ListItem>
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