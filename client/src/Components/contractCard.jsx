import { Typography, Divider, List } from "@mui/material";
// import { ImageIcon, BeachAccessIcon, WorkIcon } from "@mui/icons-material";
import React from "react";
import ContractList from "./ContractList";
import supabase from "../supabase";

function ContractCard(props) {
  async function handleDownload() {
    const { data, error } = await supabase.storage
      .from("contract")
      .download("contract_1697137073129.pdf");
  }

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
        <ContractList
          companyName="TST"
          sendingDate={currentDate}
          onClick={handleDownload}
        />
        <ContractList
          companyName="Nasdaq"
          sendingDate={currentDate}
          onClick={handleDownload}
        />
        <ContractList
          companyName="Morgan Stanley"
          sendingDate={currentDate}
          onClick={handleDownload}
        />
      </List>
    </>
  );
}

export default ContractCard;
