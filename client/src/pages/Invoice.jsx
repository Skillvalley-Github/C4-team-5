import React from "react";
import easyinvoice from "easyinvoice";
import { Box, Button } from "@mui/material";
import { Card, TextField } from "@mui/material";
import { FormControl, FormLabel } from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

function InvoiceGenerator() {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [freelancerName, setFreelancerName] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoice, setInvoice] = useState(null);

  const handleCompanyName = (e) => {
    console.log("c");
    setCompanyName(e.target.value);
  };

  const handleCompanyAddress = (e) => {
    console.log("c");

    setCompanyAddress(e.target.value);
  };

  const handleFreelancerName = (e) => {
    console.log("c");

    setFreelancerName(e.target.value);
  };

  const handleProjectTitle = (e) => {
    console.log("c");

    setProjectTitle(e.target.value);
  };

  const handleAmount = (e) => {
    console.log("c");

    setAmount(e.target.value);
  };

  const handleInvoiceNo = (e) => {
    console.log("c");

    setInvoiceNo(e.target.value);
  };

  async function handleUpload() {
    try {
      const formData = new FormData();
      
      console.log(invoice);
      formData.append("invoice", invoice);

       await axios.post(
        "http://localhost:4000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function generateInvoice() {
    console.log("entered");

    const data = {
      documentTitle: "Invoice",
      currency: "USD",
      taxNotation: "vat",
      marginTop: 25,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 25,
      logo: "FreelancerShala",
      sender: {
        company: companyName,
        // address: "Mumbai",
        // zip: "12345",
        // city: "City",
        // country: "Country",
        address: companyAddress,
        email: "info@example.com",
        phone: "+1234567890",
      },
      client: {
        company: freelancerName,
        address: "456 Client Street",
        zip: "54321",
        city: "Client City",
        country: "Client Country",
        email: "client@example.com",
        phone: "+9876543210",
      },
      invoiceNumber: invoiceNo,
      invoiceDate: "2023-09-23",
      products: [
        {
          description: projectTitle,
          quantity: 2,
          tax: 10,
          price: amount,
        },
        // {
        //   description: "Product 2",
        //   quantity: 3,
        //   tax: 10,
        //   price: 75,
        // },
      ],
      bottomNotice: "Thank you for your business!",
    };

    const result = await easyinvoice.createInvoice(data);
    document.getElementById("pdf").innerHTML = "loading...";
    console.log("PDF base64 string: ", result.pdf);
    easyinvoice.download("myInvoice.pdf", result.pdf);
    easyinvoice.render("pdf", result.pdf);
  }

  return (
    <>
      <Box>
        {/* <Card sx={{ minHeight: 200 }}> */}
          <FormControl
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
            <Button variant="contained" onClick={generateInvoice}>
              Generate Invoice
            </Button>
          </FormControl>
        {/* </Card> */}
        <Card id="pdf"></Card>
        <input
          type="file"
          name="invoice"
          onChange={(e) => setInvoice(e.target.files[0])}
        />
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{ m: 2 }}
          onClick={handleUpload}
        >
          Upload Invoice
        </Button>
      </Box>
    </>
  );
}

export default InvoiceGenerator;
