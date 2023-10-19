import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import ContractCard from "./contractCard";
import { Box, Typography, Card, Grid } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button } from "@mui/material";
import supabase from "./../supabase";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00693E",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  contractID,
  companyName,
  amount,
  startDate,
  duartion,
  status
) {
  return { contractID, companyName, amount, startDate, duartion, status };
}

const rows = [
  createData(
    "a8a21757-4f19-4ce0-86c4-2661dc5a43af",
    "TST",
    100,
    "12-10-2023",
    "1 month",
    "Completed"
  ),
  createData(
    "a8a21757-4f19-4ce0-86c4-2661dc5a43af",
    "MindFry",
    100,
    "12-10-2023",
    "1 month",
    "Completed"
  ),
  createData(
    "a8a21757-4f19-4ce0-86c4-2661dc5a43af",
    "MindFry",
    100,
    "12-10-2023",
    "1 month",
    "Completed"
  ),
  createData(
    "a8a21757-4f19-4ce0-86c4-2661dc5a43af",
    "TST",
    100,
    "12-10-2023",
    "1 month",
    "Completed"
  ),
];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function Contract(props) {
  const [selectedContract, setSelectedContract] = useState(null);
  const [user, setUser] = useState([]);
  const [freelancer, setFreelancer] = useState([]);

  async function handleUpload(e) {
    let { freelancer } = await supabase
      .from("freelancer")
      .select("freelancer_id")
      .then(setFreelancer(freelancer));

    if (freelancer) {
      console.log(freelancer);
    }

    const { user } = await supabase.auth.getUser();
    if (user) {
      console.log(user);
      setUser(user);
    }

    //supabase
    const { data, error } = await supabase.storage
      .from("contract")
      .upload(`contract_${Date.now()}.pdf`, selectedContract);
    if (error) {
      console.log(error);
      return;
    }
  }

  return (
    <>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "200%",
            fontWeight: "bolder",
            m: 2,
          }}
        >
          Contracts
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card
              variant="outlined"
              sx={{ ml: 3, maxHeight: 600, overflowY: "scroll" }}
            >
              <ContractCard contractType="Active" />
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card
              variant="outlined"
              sx={{ mr: 3, maxHeight: 600, overflowY: "scroll" }}
            >
              <ContractCard contractType="Previous" />
            </Card>
          </Grid>
        </Grid>
      </Box>

      <input
        type="file"
        name="file"
        onChange={(e) => setSelectedContract(e.target.files[0])}
      />
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        sx={{ m: 2 }}
        onClick={handleUpload}
      >
        Upload Contract
      </Button> */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ fontSize: 20 }}>
                Contract ID
              </StyledTableCell>
              <StyledTableCell align="right" style={{ fontSize: 20 }}>
                Company Name
              </StyledTableCell>
              <StyledTableCell align="right" style={{ fontSize: 20 }}>
                Amount&nbsp;($)
              </StyledTableCell>
              <StyledTableCell align="right" style={{ fontSize: 20 }}>
                Start Date
              </StyledTableCell>
              <StyledTableCell align="right" style={{ fontSize: 20 }}>
                Duration
              </StyledTableCell>
              <StyledTableCell align="right" style={{ fontSize: 20 }}>
                Status
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{ fontSize: 15 }}
                >
                  {row.contractID}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.companyName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button>{row.startDate}</Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button>{row.duartion}</Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button>{row.status}</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Contract;
