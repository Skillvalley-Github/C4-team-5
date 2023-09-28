import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import ContractCard from "./contractCard";
import { Box, Typography, Card, Grid } from "@mui/material";
import axios from "axios";
import { useState } from "react";

import { styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button } from "@mui/material";

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

  async function handleUpload(e) {
    // setSelectedContract(e.target.files[0]);
    try {
      const formData = new FormData();

      formData.append("file", selectedContract);

      console.log(selectedContract);

      const response = await axios.post("http://localhost:4000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type for form data
        },
      }); 

      // Handle the response from the server
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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

      <input type="file" name="file" onChange={(e)=>setSelectedContract(e.target.files[0])}/>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        sx={{ m: 2 }}
        onClick={handleUpload}
      >
        Upload Contract
      </Button>
    </>
  );
}

export default Contract;
