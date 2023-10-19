import React from "react";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router";
import freelancer from '../SVGs/landpage.png';
import contract from "../SVGs/contract.png";
import invoice from "../SVGs/Invoice (2).png";
import { Card } from "@mui/material";

import { TypeAnimation } from "react-type-animation";

// import { TypeAnimation } from "react-type-animation";

const pages = ["Home", "How it Works", "Category"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function LandingPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "teal" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: "0.1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              SkillSprinters
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                // fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ ml: 4, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}

            <Button color="inherit" sx={{ mr: 3 }} onClick={navigateToLogin}>
              Login
            </Button>
            <Button color="inherit" sx={{ mr: 3 }} onClick={navigateToSignUp}>
              SignUp
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <Typography
            sx={{
              fontFamily: "monospace",
              fontSize: "300%",
              fontWeight: "bolder",
              ml: 2,
            }}
          >
            "<span style={{ color: "teal" }}>SkillSprinters</span>": Where
            <span style={{ color: "teal" }}>
              <TypeAnimation
                sequence={["Skills", 2000, " Talent ", 2000]}
                wrapper="span"
                speed={150}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </span>{" "}
            Find{" "}
            <span style={{ color: "teal" }}>
              <TypeAnimation
                sequence={["Opportunities", 800, "Success", 1200]}
                wrapper="span"
                speed={150}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <img src={freelancer} alt="" style={{ width: "90%" }} />
        </Grid>
      </Grid>

      {/* features */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontSize: "200%", fontWeight: "bolder" }}>
          Highly Featured App to Manage{" "}
          <span style={{ color: "teal" }}>Contract 📜</span> And{" "}
          <span style={{ color: "teal" }}>Invoice 💶</span> for Freelancer.
        </Typography>
      </div>
      <div
        className="images"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       <img src={contract} alt=""  style={{width:500}}/>
       <img src={invoice} alt="" style={{width:500}}/>
       
      </div>

      {/* footer */}
    </>
  );
}

export default LandingPage;
