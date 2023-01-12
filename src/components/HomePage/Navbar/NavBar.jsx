import * as React from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import { Link as Links } from "react-router-dom";
import { Drawer, Link, List, styled } from "@mui/material";
import { useState } from "react";
import { mainListItems } from "./ListItem";
import logo from "../../../assets/logo.png";
import CustomButton from "../../CustomButtom/CustomButton";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>{mainListItems}</List>
    </Box>
  );

  const NavLink = styled(Link)(({ theme }) => ({
    fontSize: "14px",
    textDecoration: "none",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#5c6",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    width: "130px",
    height: "150px",
    margin: "-26px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src={logo} alt="logo" />
        </Box>

        <NavbarLinksBox>
          <NavLink variant="body2" component={Links} to="/">
            Home
          </NavLink>
          <NavLink variant="body2" component={Links} to="/signIn">
            Services
          </NavLink>
          <NavLink variant="body2" component={Links} to="/signIn">
            About Us
          </NavLink>
          <NavLink variant="body2" component={Links} to="/signIn">
            Contact Us
          </NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavLink variant="body2" component={Links} to="/signIn">
          Sign In
        </NavLink>
        <NavLink component={Links} to="/signUp">
          <CustomButton
            backgroundColor="#5c5"
            color="#fff"
            buttonText="Register"
          />
        </NavLink>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
