// signup.js
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Paper } from "@mui/material";
const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
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

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    
    axios
    .post("http://localhost:3001/posts", formData)
    .then((response) => {
      navigate("/signin");
    })

    .catch((error) => {
      console.error("error" + error);
      });
  };

  return (
    <Box
      sx={{
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > :not(style)": {
          m: 1,
          width: 475,
          height: 650,
        },
      }}
    >
      <Paper
        elevation={0}
        sx={{ backgroundColor: "rgba(255,255,255,0.3)", color: "white" }}
        variant="outlined"
      >
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{ color: "white" }}>
                Sign up
              </Typography>

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      InputLabelProps={{
                        style: { color: "white" },
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
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirm password"
                      label="Confirm Password"
                      type="password"
                      id="confirm password"
                      autoComplete="new-password"
                      InputLabelProps={{
                        style: { color: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, color: "white" }}
                >
                  Sign Up
                </Button>

                
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Paper>
    </Box>
  );
}
