import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import MedicationIcon from "@mui/icons-material/Medication";
// import Home from "../homepage.js/home";
import { useEffect } from "react";
import "../../Styles/Navbar.css";

export default function AppBars() {
  useEffect(() => {
    // Save original body background style
    const originalBackground = document.body.style.background;
    const originalBackgroundSize = document.body.style.backgroundSize;

    // Set new body background style
    document.body.style.background =
      "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9a17937-8c0d-4a78-b75b-d9847af5b606/dg7ssyw-c79f2b26-1b69-4633-8cd6-4256bcca93eb.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5YTE3OTM3LThjMGQtNGE3OC1iNzViLWQ5ODQ3YWY1YjYwNlwvZGc3c3N5dy1jNzlmMmIyNi0xYjY5LTQ2MzMtOGNkNi00MjU2YmNjYTkzZWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EO5d-A_h03cUY0q0fAsM8qlGBnPxiT2hybyl1VHA1ws) repeat";
    document.body.style.backgroundSize = "cover";

    // Reset to original body background style on component unmount
    return () => {
      document.body.style.background = originalBackground;
      document.body.style.backgroundSize = originalBackgroundSize;
    };
  }, []);
  return (
    <div className="div1">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "black",
            // border: "green solid 0.3px ",
            color: "greenyellow",
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
              <Button style={{ color: "greenyellow" }} color="inherit">
                Home
              </Button>
            </Link>

<<<<<<< HEAD
            <Link to="/bill">
              <Button style={{ color: "greenyellow" }} color="inherit">
=======
            <Link to="/invoice">
              <Button style={{ color: "white" }} color="inherit">
>>>>>>> 0bb889b7971e31e8aeb31a42f15bab3ab83fe047
                Bill
              </Button>
            </Link>

            <Link to="/signin">
              <Button style={{ color: "greenyellow" }} color="inherit">
                Logout
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
