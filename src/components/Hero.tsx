import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '35rem',
        textAlign: 'left',
        backgroundColor: '#0e3e59',
        color: 'white'
      }}
    >
      <Container maxWidth="md">
        <Box display="flex" alignItems="baseline">
          <Typography variant="h2" component="h1" gutterBottom sx={{ marginRight: 1, fontWeight: 'bold' }}>
            Your Stops,
          </Typography>
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#8fc5e0', fontWeight: 'bold' }}>
            On Your Time
          </Typography>
        </Box>
        <Typography variant="h5" component="p">
          Keep track of when buses are arriving at specific bus stops.
          Instead of having to search for routes using alternatives, we know 
          that users frequent the same bus stops and provide immediate access to 
          when buses arrive at that stop.
        </Typography>
      </Container>
    </Box>
  );
}

export default Hero;
