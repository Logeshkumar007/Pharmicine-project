// src/components/MedicationList.js
import React from 'react';
// import { Card, CardContent } from '@mui/material';
import { Box,Card,CardMedia,CardContent,CardActions, Grid, Paper ,Typography,Button} from "@mui/material";
const MedicationList = ({ medications, addToCart }) => {
  return (
    <ul type='none'>
        <Box>
            <Grid display='flex' container spacing={10}>
      {medications.map((medication) => (
        
        <Grid item>



<Card sx={{ marginTop:2,maxWidth: 345,backgroundColor:'greenyellow',marginLeft:7}}>
<CardMedia
  sx={{ height: 300 }}
  image={medication.img}
  title="green iguana"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
  {medication.name}
  </Typography>
  <Typography variant="body2">
        {medication.des}
  </Typography>
</CardContent>
<CardActions>
<Button onClick={() => addToCart(medication)}>Add to Cart</Button>
  <Button size="small">Learn More</Button>
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
