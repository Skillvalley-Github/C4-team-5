import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, styled } from "@mui/material";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import signup from "../SVGs/signup.png";
import login from "../SVGs/login.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        SkillSprinters
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {
  const [helperText, setHelperText] = useState({ error: null, text: null });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { user, error } = await supabase.auth
        .signInWithPassword({
          email,
          password,
        })
        .then(navigate("/user/"))
        .then(sessionStorage.getItem("token"));

      if (error) {
        setHelperText({ error: true, text: error.message });
      } else if (!user && !error) {
        setHelperText({
          error: false,
          text: "An email has been sent to you for verification!",
        });
      }
    } catch (error) {
      console.log("error in login", error);
    }
  }

  const signUpWithGithub = async (provider) => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  return (
      <Container >
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs" style={{ backgroundImage: `url(${login})` }}>
            <Typography
              sx={{
                color: "teal",
                fontWeight: "bolder",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                top: "20%",
                fontSize: "200%",
              }}
            >
              SkillSprinters
            </Typography>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "teal" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}></Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "teal" }}
                  onClick={handleSubmit}
                >
                  Login
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/signup">Don't have account</Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </Container>
  );
}
