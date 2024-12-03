import React from 'react';
import { Box, Button, Container } from '@mui/material';

const Downloads: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#8fc5e0',
        padding: '1.5rem 0',
      }}
    >
      <Container 
        maxWidth="md" 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, // Change to column on small screens
          justifyContent: 'space-around', 
          gap: 3 
        }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: '#0e3e59', flex: 1, mx: 1 }}
          href="https://vault.sfu.ca/index.php/s/QvbFqNZ4z2Wgmn1"
          target='_blank'
          rel='noopener noreferrer'
        >
          APK Download
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#0e3e59', flex: 1, mx: 1 }}
          href="https://vault.sfu.ca/index.php/s/Jrk7Z1k1oYXnIyb"
          target='_blank'
          rel='noopener noreferrer'
        >
          Source Code
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#0e3e59', flex: 1, mx: 1 }} 
          href="https://github.com/JoshuaJLi/cmpt362-wtb"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Repo
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#0e3e59', flex: 1, mx: 1 }}
          href="https://github.com/bryanjhdang/wheres-the-bus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website Repo
        </Button>
      </Container>
    </Box>
  );
};

export default Downloads;
