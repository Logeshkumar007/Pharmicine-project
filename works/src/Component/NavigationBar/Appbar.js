import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import MedicationIcon from "@mui/icons-material/Medication";
import Home from "../homepage.js/home";

export default function AppBars() {
  return (
    <div className="div1">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "transparent",
            border: "green solid 0.3px ",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <MedicationIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PHARMA
            </Typography>

            <Link to="/home">
            <Button style={{ color: "white" }} color="inherit">
              Home
            </Button>
            </Link>

            <Link to="/invoice">
              <Button style={{ color: "white" }} color="inherit">
                Bill
              </Button>
            </Link>

            <Link to="/signin">
              <Button style={{ color: "white" }} color="inherit">
                Logout
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
