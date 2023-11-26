// src/components/MedicationList.js
import React from "react";
// import { Card, CardContent } from '@mui/material';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  // Paper,
  Typography,
  Button,
} from "@mui/material";
const MedicationList = ({ medications, addToCart, price }) => {
  return (
    <ul type="none">
      <Box>
        <Grid display="flex" container spacing={10}>
          {medications.map((medication) => (
            <Grid item>
              <Card
                sx={{
                  marginTop: 2,
                  maxWidth: 345,
                  backgroundColor: "grey",
                  marginLeft: 7,
                }}
              >
                <CardMedia
                  sx={{ height: 180 }}
                  image={medication.img}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {medication.name}
                  </Typography>
                  <Typography variant="body2">{medication.des}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => addToCart(medication)}
                    style={{ color: "green", backgroundColor: "#72FFFF" }}
                  >
                    Add to Cart
                  </Button>
                  <Typography style={{ marginLeft: "20px", fontSize: "30px" }}>
                    <strong> ${medication.price}</strong>
                  </Typography>
                  {/* <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ul>
  );
};

export default MedicationList;
