import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import bgImage from "../../assets/wp13110351-medical-store-wallpapers.jpg";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBars from "../NavigationBar/Appbar";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Home() {
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
    <ThemeProvider theme={defaultTheme}>
      <AppBars />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url('${bgImage}')`,
            backgroundRepeat: "no-repeat",

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ backgroundColor: "transparent" }}
        >
          <Box
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // bottom: "0px",
              // width: "100%",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                alignItems: "center",
                color: "greenyellow",
                // border: "2px solid white",
                my: 30,
                padding: "10px",
                // marginBottom: "20px",
                borderRadius: "10px",
              }}
            >
              Welcome to the{" "}
              <span>
                {" "}
                <strong>Pharmacy </strong>
              </span>
              Management System
            </Typography>

            <footer
              style={{
                // border: "2px solid white",
                padding: "20px",
                alignItems: "center",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginLeft: "60px",
                // al,
              }}
            >
              <IconButton
                style={{ color: "white" }}
                href="https://github.com/Nithishuchiha"
              >
                <SvgIcon>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6 .113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.905-.015 3.3 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </SvgIcon>
              </IconButton>
              <IconButton
                // color="inherit"
                style={{
                  color: "white",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                href="https://www.facebook.com/your-facebook-url"
              >
                <SvgIcon>
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V7.407c0-3.1 1.893-4.778 4.659-4.778 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0" />
                </SvgIcon>
              </IconButton>
              <IconButton
                style={{ color: "white" }}
                href="mailto:your-email@example.com"
              >
                <SvgIcon>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </SvgIcon>
              </IconButton>
              <IconButton
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/your-linkedin-profile"
              >
                <SvgIcon>
                  {/* <path d="M22,19.45V22H18.27V19.45C18.27,17.76 17.16,16.36 15.21,16.36C13.89,16.36 13.09,17.1 12.82,17.74H12.78V13H9V22H12.81V18.2C12.81,17.66 13.06,16.89 14.11,16.89C15.15,16.89 15.57,17.66 15.57,18.24V22H19.36C19.36,22 19.35,20.13 19.35,19.45H22Z M7,9C8.1,9 9,8.1 9,7C9,5.9 8.1,5 7,5C5.9,5 5,5.9 5,7C5,8.1 5.9,9 7,9M8,22H5V13H8V22Z" /> */}
                  <LinkedInIcon />
                </SvgIcon>
              </IconButton>
              <IconButton
                style={{
                  color: "white",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                href="https://plus.google.com/your-google-plus-profile"
              >
                <SvgIcon>
                  <GoogleIcon />
                  {/* <path d="M16.6,10.24C16.62,9.67 16.6,9.09 16.6,8.5H8.5V12.2H13.57C13.46,13.24 12.89,14.13 12,14.79V17.5H15.25C16.78,15.91 17.5,13.62 17.5,11.3C17.5,10.78 17.45,10.26 17.36,9.75L16.6,10.24Z M8.5,18C10.43,18 12.06,17.21 13.22,15.72V15.72L12.74,15.22C11.65,16.15 10.22,16.5 8.5,16.5C6.34,16.5 4.5,14.71 4.5,12.5C4.5,10.29 6.34,8.5 8.5,8.5C9.88,8.5 11.14,9.39 11.7,10.74L15.2,7.24C13.72,5.34 11.5,4.5 9,4.5C5.42,4.5 2.5,7.42 2.5,11C2.5,14.58 5.42,17.5 9,17.5C9.38,17.5 9.76,17.47 10.13,17.41L10.59,17.91C9.97,18.45 9.26,18 8.5,18Z" /> */}
                </SvgIcon>
              </IconButton>

              <IconButton
                style={{ color: "white" }}
                href="https://twitter.com/your-twitter-handle"
              >
                <SvgIcon>
                  <TwitterIcon />
                  {/* <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C7.69,9.09 4.07,7.38 1.64,4.79C1.2,5.42 1,6.16 1,6.94C1,8.43 1.91,9.75 3.44,10.5C2.62,10.5 1.86,10.3 1.2,10" /> */}
                </SvgIcon>
              </IconButton>
            </footer>
            <Typography
              variant="body2"
              color="text.secondary"
              align="bottom"
              style={{ marginTop: "10px", color: "white" }}
            >
              {"Copyright © "}
              Your Website {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
