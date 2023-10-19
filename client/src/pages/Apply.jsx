import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import {
  Container,
  FormControl,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FormLabel } from "@mui/material";
import { Grid } from "@mui/material";
import supabase from "../supabase";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const defaultTheme = createTheme();

function Apply() {

  const [resume, setResume] = useState('');

  async function handleApplyJob() {
    //supabase
    const { data, error } = await supabase.storage
    .from("resume")
    .upload(`resume_${Date.now()}.pdf`, resume);
  if (error) {
    console.log(error);
    return;
  } 
  }


  return (
    <>
      {/* Coverletter */}
      <Paper
        elevation={0}
        style={{
          height: "100vh",
          backgroundColor: "#FFFFF0",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <ThemeProvider theme={defaultTheme}>
          <Stack spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={10}>
                <FormControl
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  sx={{ m: 2 }}
                >
                  <Typography style={{ fontSize: 20 }}>
                    Just one more task to go
                  </Typography>
                  <FormLabel
                    style={{ fontSize: 15, fontWeight: "bolder" }}
                    sx={{ m: 2 }}
                  >
                    Cover Letter
                  </FormLabel>
                  <StyledTextarea
                    aria-label="minimum height"
                    minRows={8}
                    placeholder=""
                    sx={{ height: 200,width:700, mb: 3 }}
                  />
                  <FormLabel style={{ fontSize: 15, fontWeight: "bolder" }}>
                    Upload Resume
                  </FormLabel>
                  <Box
                    width="70%"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 1000,
                    }}
                    sx={{ mt: 2, mb: 4 }}
                  >
                    <Item style={{ backgroundColor: "	#FFF8DC" }}>
                      <input type="file" onChange={(e) => {
                        setResume(e.target.files[0]);
                      }} />
                      {/* <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                      >
                      
                      </Button> */}
                    </Item>
                  </Box>
                  <Grid>  
                    <Button variant="contained" onClick={handleApplyJob}>Apply Now</Button>
                  </Grid>
                </FormControl>
              </Grid>
            </Grid>
          </Stack>
        </ThemeProvider>
      </Paper>
      {/*submit your resume.  */}
    </>
  );
}

export default Apply;
