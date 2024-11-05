import React from 'react';
import { Box, Button, Container } from '@mui/material';

const Downloads: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'secondary.main',
        padding: '1.5rem 0',
      }}
    >
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button variant="contained" color="primary" disabled>
          APK Download
        </Button>
        <Button variant="contained" color="primary" disabled>
          Source Code
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="https://github.com/dummy-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="https://github.com/bryanjhdang/wheres-the-bus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website GitHub
        </Button>
      </Container>
    </Box>
  );
};

export default Downloads;
