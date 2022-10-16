import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import "../styles/navBar.css";

const pages = [
  {name: "Home", path: "/"},
  {name: "Events", path: ""},
  {name: "About Us", path: "about"},
  {name: "Result", path: "result"}
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: "#0e0d0d80" }} className="app-bar">
      <Container maxWidth="xl">
        <Toolbar>
          {/* can insert logo here */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Techyon
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            className="position-absolute"
            style={{ right: "0" }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              // className="position-absolute right-1"
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
              PaperProps={{
                sx: {
                  width: "100%",
                  color: "#fff",
                  background: "rgba(104, 99, 99, 0.5)",
                  backdropFilter: "blur(14px)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {page.name === 'Events' ? (
                      <NavLink to={page.path} className={`link`}>
                        <div onClick={() => {
                          const anchor = document.getElementById("events");
                          anchor.scrollIntoView({block: "center"});
                        }}>
                          {page.name}
                        </div>
                      </NavLink>
                    ) : (
                      <NavLink className={`link`} to={page.path}>{page.name}</NavLink>
                    )}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* can insert logo here */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Techyon
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 2, color: "white", display: "block" }}
              >
                {page.name === 'Events' ? (
                  <div onClick={() => {
                    const anchor = document.getElementById("events");
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}>
                    <NavLink to={page.path} className={`nav-link ${(navData) => (navData.isActive ? 'active-link' : '')}`}>
                      {page.name}
                    </NavLink>
                  </div>
                  ) : (
                  <NavLink to={page.path} className={`nav-link ${(navData) => (navData.isActive ? 'active-link' : '')}`}>
                    {page.name}                      
                  </NavLink>
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
