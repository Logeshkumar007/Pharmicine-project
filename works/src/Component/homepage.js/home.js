// home.js
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';

import {Paper,Grid,Container,Typography} from '@mui/material';
export default function Home()
{    

    return(
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              
              <Grid item xs={12}>
                <Paper id='paper1'
                  sx={{
                    
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                  }}
                >
                  <h1>Welcome</h1>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper id='paper2'
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <div>

                  <h1>Out of stock</h1>
                  <ul>
                    <li>Paracetamol</li>
                    <li>Dolophor</li>
                    <li>Glucose</li>
                    <li>Glucose</li>
                    <li>Glucose</li>

                  </ul>
                  </div>
                </Paper>
              </Grid>
              
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
    )
}