import { Dashboard, Menu } from "@mui/icons-material";
import {
  Button,
  Container,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React, { useState } from "react";
import { mainListItems } from "./ListItem";
import useStyle from "./style";

function NavBar() {
  const theme = useTheme();

  const useStyles = useStyle();
  const [MobileMenu, setMobileMenu] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (e) => {
    if (e.type === "keydown" && (e.type === "Tab" || e.type === "shift")) {
      return;
    }
    setMobileMenu({ ...MobileMenu, [anchor]: open });
  };
  const list = (anchor) => {
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Drawer list Items */}
      <List>
        {" "}
        <Tooltip title="Dashboard">
          <ListItem button component={Link} to="/patient/dashboard">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Tooltip>
      </List>
    </Box>;
  };

  return (
    <Container sx={useStyles.container}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Menu onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={MobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <Typography sx={{ display: "block", cursor: "pointer" }}>
            MY Eye Care
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",

            textDecoration: "none",
            color: "black",
            "&:Link": {
              color: "red",
            },
          }}
        >
          <Typography to="/forgotpass">Home</Typography>
          <Link variant="body2" href="/forgotpassword">
            Home
          </Link>
          <Link variant="body2" href="/forgotpassword">
            Features
          </Link>
          <Link variant="body2" href="/forgotpassword">
            Services
          </Link>
          <Link variant="body2" href="/forgotpassword">
            About Us
          </Link>
          <Link variant="body2" href="/forgotpassword">
            Contact Us
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Link variant="body2"> Sign In</Link>
        <Button
          type="submit"
          //   style={btnstyle}
          variant="contained"

          // disabled={props.isSubmitting}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default NavBar;
