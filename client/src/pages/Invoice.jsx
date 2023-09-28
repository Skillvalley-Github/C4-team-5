import React from "react";
import easyinvoice from "easyinvoice";
import { Box, Button } from "@mui/material";
import { Card, TextField } from "@mui/material";
import { FormControl, FormLabel } from "@mui/material";

function InvoiceGenerator() {
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
        company: "FreelancerShala",
        address: "Mumbai",
        zip: "12345",
        city: "City",
        country: "Country",
        email: "info@example.com",
        phone: "+1234567890",
      },
      client: {
        company: "Client Company",
        address: "456 Client Street",
        zip: "54321",
        city: "Client City",
        country: "Client Country",
        email: "client@example.com",
        phone: "+9876543210",
      },
      invoiceNumber: "2023001",
      invoiceDate: "2023-09-23",
      products: [
        {
          description: "Product 1",
          quantity: 2,
          tax: 10,
          price: 30,
        },
        {
          description: "Product 2",
          quantity: 3,
          tax: 10,
          price: 75,
        },
      ],
      bottomNotice: "Thank you for your business!",
    };

    const result = await easyinvoice.createInvoice(data);
    document.getElementById("pdf").innerHTML = "loading...";
    console.log("PDF base64 string: ", result.pdf);
    easyinvoice.download("myInvoice.pdf", result.pdf);
    // easyinvoice.render("pdf", result.pdf);
  }

  return (
    <>
      <Box>
        <Card sx={{ minHeight: 200 }}>
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
            />
            <TextField
              id="outlined-basic"
              label="Company's Address"
              variant="outlined"
              sx={{ m: 2, width: 500 }}
            />
            <TextField
              id="outlined-basic"
              label="Freelancer's Name"
              variant="outlined"
              sx={{ m: 2, width: 500 }}
            />
            <TextField
              id="outlined-basic"
              label="Project's Title"
              variant="outlined"
              sx={{ m: 2, width: 500 }}
            />
            <TextField
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              sx={{ m: 2, width: 500 }}
            />
            <TextField
              id="outlined-basic"
              label="Invoice No."
              variant="outlined"
              sx={{ m: 2, mb: 5, width: 500 }}
            />
            <Button variant="contained" type="submit">
              Generate Invoice
            </Button>
          </FormControl>
        </Card>
        {/* <Card id="pdf"></Card> */}
      </Box>
    </>
  );
}

export default InvoiceGenerator;
