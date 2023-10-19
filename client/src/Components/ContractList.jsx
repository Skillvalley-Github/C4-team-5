import React, { useEffect } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import supabase from "../supabase";

function ContractList(props) {
  const [isHovering, setIsHovering] = useState(false);
  // const [download, setDownload] = useState('');

  useEffect(() => {
    const fetchFreelancer = async () => {
      const { data, error } = await supabase.from("freelancer").select();
      
    };

    fetchFreelancer();
  }, []);

  const handleDownload = async () => {
    const { data, error } = await supabase.storage
      .from("contract")
      .download("contract/contract_1697137073129.pdf");
  };

  const handleMouseEnter = async () => {
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
        onClick={handleDownload}
        // onChange={(e) => {
        //   // setDownload(e.target.files[0]);
        // }}
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
