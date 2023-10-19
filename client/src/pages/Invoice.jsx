import React from "react";
import easyinvoice from "easyinvoice";
import { Box, Button, Typography } from "@mui/material";
import { Card, TextField } from "@mui/material";
import { FormControl, FormLabel } from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import supabase from "../supabase";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";

import { Grid } from "@mui/material";

import paidInvoice from "../SVGs/paid-invoice.png";
import Invoice from "../SVGs/invoice.png";
import warning from "../SVGs/warning.png";

import "./invoice.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function InvoiceGenerator() {

  const navigate = useNavigate();


  const handleInvoiceTable = () => {
    console.log('clicked')
    navigate('../allinvoices');
  }

  return (
    <>
      <Box>
        {/* <Card sx={{ minHeight: 200 }}> */}
        {/* <FormControl
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onSubmit={generateInvoice}
          >
            <TextField
              id="outlined-basic"
              label="Company's Name"
              variant="outlined"
              sx={{ m: 2, width: 500 }}
              onChange={handleCompanyName}
            />
            <TextField
              id="outlined-basic"
              label="Company's Address"
              variant="outlined"
              sx={{ m: 2, width: 500 }}
              onChange={handleCompanyAddress}
            />
            <TextField
              id="outlined-basic"
              label="Freelancer's Name"
              variant="outlined"
              sx={{ m: 2, width: 500 }}
              onChange={handleFreelancerName}
            />
            <TextField
              id="outlined-basic"
              label="Project's Title"
              variant="outlined"
              sx={{ m: 2, width: 500 }}
              onChange={handleProjectTitle}
            />
            <TextField
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              sx={{ m: 2, width: 500 }}
              onChange={handleAmount}
            />
            <TextField
              id="outlined-basic"
              label="Invoice No."
              variant="outlined"
              sx={{ m: 2, mb: 5, width: 500 }}
              onChange={handleInvoiceNo}
            />
          </FormControl> */}
        {/* </Card> */}
        <div
          className="invoice"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={2} sx={{ m: 3 }}>
              <Item
                style={{
                  width: 200,
                  margin: 8,
                  minHeight: 200,
                  backgroundColor: "#98FB98",
                  backgroundImage: "linear-gradient('#17B169','#00693E')",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow:" 1px 2px 3px 4px rgba(20,20,20,0.4)"
                  
                }}
                className="boxes"
                onClick={handleInvoiceTable}
              >
                <Typography
                  style={{
                    fontSize: "200%",
                    color: "#FFF5EE",
                    fontWeight: "bolder",
                  }}
                >
                  Total Amount{" "}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2} sx={{ m: 3 }}>
              <Item
                style={{
                  width: 200,
                  margin: 8,
                  minHeight: 200,
                  backgroundColor: "#98FB98",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow:" 1px 2px 2px 3px rgba(20,20,20,0.4)"
                }}
                className="boxes"
                onClick={handleInvoiceTable}
              >
                <Typography
                  style={{
                    fontSize: "200%",
                    color: "#FFF5EE",
                    fontWeight: "bolder",
                  }}
                >
                  Total Paid{" "}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2} sx={{ m: 3 }}>
              <Item
                style={{
                  width: 200,
                  margin: 8,
                  minHeight: 200,
                  backgroundColor: "#98FB98",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow:" 1px 2px 2px 3px rgba(20,20,20,0.4)"
                }}
                className="boxes"
                onClick={handleInvoiceTable}
              >
                <Typography
                  style={{
                    fontSize: "200%",
                    color: "#FFF5EE",
                    fontWeight: "bolder",
                  }}
                >
                  Total Due{" "}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2} sx={{ m: 3 }}>
              <Item
                style={{
                  width: 200,
                  margin: 8,
                  minHeight: 200,
                  backgroundColor: "#98FB98",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection:"column",
                  boxShadow:" 1px 2px 2px 3px rgba(20,20,20,0.4)"
                }}
                className="boxes"
                onClick={handleInvoiceTable}
              >
                <img src={Invoice} alt="" style={{width:70,margin:5}}/>
                <Typography
                  style={{
                    fontSize: "200%",
                    color: "#FFF5EE",
                    fontWeight: "bolder",
                  }}
                >
                  Total Invoices{" "}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2} sx={{ m: 3 }}>
              <Item
                style={{
                  width: 200,
                  margin: 8,
                  minHeight: 200,
                  backgroundColor: "#98FB98",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection:"column",
                  boxShadow:" 1px 2px 2px 3px rgba(20,20,20,0.4)"
                }}
                className="boxes"
                onClick={handleInvoiceTable}
              >
                <img src={paidInvoice} alt="" style={{width:70,margin:5}}/>
                <Typography
                  style={{
                    fontSize: "200%",
                    color: "#FFF5EE",
                    fontWeight: "bolder",
                  }}
                >
                  Total Paid Invoices{" "}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={2} sx={{ m: 3 }}>
              <Item
                style={{
                  width: 200,
                  margin: 8,
                  minHeight: 200,
                  backgroundColor: "#FF3333",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection:"column",
                  boxShadow:" 1px 2px 2px 3px rgba(20,20,20,0.4)"
                }}
                className="specialBox"
                onClick={handleInvoiceTable}
              > 
                <img src={warning} alt="" style={{width:70,margin:5}}/>
                <Typography
                  style={{
                    fontSize: "200%",
                    color: "#FFF5EE",
                    fontWeight: "bolder",
                  }}
                >
                  Total Unpaid Invoices{" "}
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </div>

        {/* genrate invoice */}
        {/* <Button variant="contained" onClick={generateInvoice}>
          Generate Invoice
        </Button> */}
        {/* <Card id="pdf"></Card> */}
        
        {/* <input
          type="file"
          name="invoice"
          onChange={(e) => setInvoice(e.target.files[0])}
        /> */}

        {/* upload invoice */}
        {/* <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{ m: 2 }}
          onClick={handleUpload}
        >
          Upload Invoice
        </Button> */}
      </Box>
    </>
  );
}

export default InvoiceGenerator;
