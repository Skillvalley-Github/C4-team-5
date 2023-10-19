import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import easyinvoice from "easyinvoice";
import supabase from "../supabase";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import Modal from "@mui/material/Modal";

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

function createData(invoiceID, companyName, amount, status) {
  return { invoiceID, companyName, amount, status };
}

const rows = [
  createData("a8a21757-4f19-4ce0-86c4-2661dc5a43af", "TST", 100, "Paid"),
  createData("a8a21757-4f19-4ce0-86c4-2661dc5a43af", "MindFry", 100, "Paid"),
  createData("a8a21757-4f19-4ce0-86c4-2661dc5a43af", "MindFry", 100, "Paid"),
  createData("a8a21757-4f19-4ce0-86c4-2661dc5a43af", "TST", 100, "Paid"),
];

//modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InvoiceTable() {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [freelancerName, setFreelancerName] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoice, setInvoice] = useState(null);

  //modal
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    //supabase
    const { data, error } = await supabase.storage
      .from("invoice")
      .upload(`invoice_${Date.now()}.pdf`, invoice);
    if (error) {
      console.log(error);
      return;
    }
  }

  
  async function generateInvoice() {
    console.log("entered");
    setOpen(true);

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
      {/* invoice ID, company name, Amount, status */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ fontSize: 20 }}>
                Invoice ID
              </StyledTableCell>
              <StyledTableCell align="right" style={{ fontSize: 20 }}>
                Company Name
              </StyledTableCell>
              <StyledTableCell align="right" style={{ fontSize: 20 }}>
                Amount&nbsp;($)
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
                  {row.invoiceID}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.companyName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                <StyledTableCell align="right" onClick={generateInvoice}>
                  <Button>{row.status}</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div id="pdf" ></div>
      </Modal>
    </>
  );
}
