import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

const Navbar: React.FC = () => {
  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: '#0e3e59' }}>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          {/* Left side - title */}
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: 'pointer', display: 'inline-block' }} // Use inline-block to limit the clickable area
            onClick={() => handleScroll('Hero')}
          >
            Where's The Bus
          </Typography>

          {/* Right side - sections */}
          <Box sx={{ marginLeft: 'auto' }}> {/* Add marginLeft to push buttons to the right */}
            <Button color="inherit" onClick={() => handleScroll('Downloads')}>
              Downloads
            </Button>
            <Button color="inherit" onClick={() => handleScroll('Videos')}>
              Videos
            </Button>
            <Button color="inherit" onClick={() => handleScroll('Team')}>
              Team
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
