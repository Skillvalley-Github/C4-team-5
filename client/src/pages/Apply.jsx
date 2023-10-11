import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Container, FormControl, TextField, Typography } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
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

function Apply() {
  return (
    <>
      {/* Coverletter */}
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Item>
            <FormControl style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Typography style={{ fontSize: 20 }}>
                Submit Your Additional Details
              </Typography>
              <Typography style={{ fontSize: 15, fontWeight: "bolder" }}>
                Cover Letter
              </Typography>
              <StyledTextarea
                aria-label="minimum height"
                minRows={8}
                placeholder=""
                
              />

              <Typography style={{ fontSize: 15, fontWeight: "bolder" }}>
                Upload Resume
              </Typography>
              <Box width="70%" style={{display:"flex", justifyContent:"center",alignItems:"center", width:1000}}>
                <Item style={{ backgroundColor: "	#FFF8DC" }}>
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                  >
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Item>
              </Box>
            </FormControl>
          </Item>
        </Stack>
      </Box>
      {/*submit your resume.  */}
    </>
  );
}

export default Apply;
