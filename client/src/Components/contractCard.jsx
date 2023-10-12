import { Typography, Divider, List } from "@mui/material";
// import { ImageIcon, BeachAccessIcon, WorkIcon } from "@mui/icons-material";
import React from "react";
import ContractList from "./ContractList";

function ContractCard(props) {
  const date = new Date();

  let currentDay = String(date.getDate()).padStart(2, "0");

  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

  let currentYear = date.getFullYear();

  // we will display the date as DD-MM-YYYY

  let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

  console.log("The current date is " + currentDate);
  return (
    <>
      <Typography sx={{ textAlign: "center", fontWeight: "bolder", m: 2 }}>
        {props.contractType} Contracts
      </Typography>
      <Divider variant="middle" />
      <List
        sx={{
          width: "100%",
          maxWidth: 500,
          bgcolor: "background.paper",
        }}
      >
        <ContractList companyName="Kwabey" sendingDate={currentDate} />
        <ContractList companyName="Nasdaq" sendingDate={currentDate} />
        <ContractList companyName="Morgan Stanley" sendingDate={currentDate} />
      </List>
    </>
  );
}

export default ContractCard;
