import * as React from "react";
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import {
  //   Toolbar,
  //   AppBar,
  Grid,
  //   Card,
  //   CardContent,
  Container,
} from "@mui/material";
import { useEffect } from "react";
import AppBars from "../NavigationBar/Appbar";
import "../../Styles/aboutus.css";
import bgimage from "../../assets/wp2471697-wallpapers.jpg";

export default function App() {
  useEffect(() => {
    // Save original body background style
    const originalBackground = document.body.style.background;
    const originalBackgroundSize = document.body.style.backgroundSize;

    // Set new body background style
    document.body.style.background = `url(${bgimage}) no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";

    // Reset to original body background style on component unmount
    return () => {
      document.body.style.background = originalBackground;
      document.body.style.backgroundSize = originalBackgroundSize;
    };
  }, []);
  return (
    <div>
      <AppBars />
      <Typography
        component="h1"
        variant="h2"
        align="center"
        gutterBottom
        color="white"
        className="h1"
      >
        About Us
      </Typography>
      <Container maxWidth="xl" className="container">
        {/* <Typography
          variant="h5"
          align="inherit"
          color="color: #CCCCCC;"
          paragraph
          className="h5"
        >
          We are a customer-focused pharmacy that prioritizes your health. Our
          team of experienced professionals are committed to bringing you
          exceptional pharmaceutical services in a welcoming environment.
          Whether you're here for a prescription fill, a consultation, or
          anything in between, we are here for you.
        </Typography> */}
        <Grid container direction="row" rowSpacing={4} columnSpacing={4}>
          <Grid item xs={12} sm={6} md={6} lg={6} className="grid-item">
            <Typography
              gutterBottom
              variant="h4"
              component="h2"
              color="#FFEEAD"
              className="h2"
            >
              Consultations:
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              color="#FFEEAD"
              className="h5"
            >
              Our knowledgeable staff is available to answer all your questions
              about your medication, dosage, and potential side effects.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}></Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}></Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            {/* <Card sx={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
          <CardContent> */}
            <Typography
              color="#FFEEAD"
              gutterBottom
              variant="h4"
              component="h2"
            >
              Prescription Filling:
            </Typography>
            <Typography
              color="#FFEEAD"
              gutterBottom
              variant="h5"
              style={{ fontSize: "30px" }}
            >
              Our fast and accurate prescription filling service gets you the
              medication you need with minimal wait time.
            </Typography>
            {/* </CardContent>
        </Card> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}></Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}></Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            {/* <Card sx={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
          <CardContent> */}
            <Typography
              color="#FFEEAD"
              gutterBottom
              variant="h4"
              component="h2"
            >
              Durable Medical Equipment
            </Typography>
            <Typography color="#FFEEAD" gutterBottom variant="h5">
              We offer a wide range of high-quality medical equipment for sale
              or rent.
            </Typography>
            {/* </CardContent>
        </Card> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}></Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}></Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            {/* <Card sx={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
          <CardContent> */}
            <Typography
              color="#FFEEAD"
              gutterBottom
              variant="h4"
              component="h2"
            >
              Flu Shots:
            </Typography>
            <Typography
              color="#FFEEAD"
              gutterBottom
              variant="h5"
              style={{ fontSize: "30px" }}
            >
              Protect yourself and your family from the flu with our convenient
              and affordable flu shots.
            </Typography>
            {/* </CardContent>
        </Card> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
