import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ 
      p: 2, 
      textAlign: 'center', 
      backgroundColor: '#0e3e59', 
      color: '#fff'
    }}>
      <Typography variant="body2">
        Copyright &copy; Where's The Bus 2024
      </Typography>
    </Box>
  );
};

export default Footer;
