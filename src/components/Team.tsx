import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';

const teamMembers = [
  {
    name: "Bryan",
    contributions: ["GTFS Realtime API", "GTFS Static", "Web Design"]
  },
  {
    name: "Ethan",
    contributions: ["Database Integration"]
  },
  {
    name: "Josh",
    contributions: ["Class Modelling", "UI Mockups", "Boilerplate/Fragment Setup"]
  },
  {
    name: "Johnny",
    contributions: ["GTFS Static", "NFC Tap", "Notifications"]
  },
  {
    name: "Jonathan",
    contributions: ["Database Setup", "UI Mockups"]
  },
];

export default function Team() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#8fc5e0',
        padding: '1.2rem 0',
        color: '#0e3e59'
      }}
    >
      <Container maxWidth="md" sx={{ py: 8, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom pb={2} sx={{ fontWeight: 'bold' }}>
          Team Breakdown
        </Typography>
        {/* Map through each team member and display name and contributions side by side */}
        <Grid container spacing={2}>
          {teamMembers.map((member) => (
            <Grid item xs={12} key={member.name}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', paddingBottom: '0.5rem' }}>
                {/* Left side - Team member name */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {member.name}
                  </Typography>
                </Box>

                {/* Right side - Contributions as inline items */}
                <Box sx={{ flex: 4, display: 'flex', gap: '1rem' }}>
                  {member.contributions.map((contribution, index) => (
                    <Typography key={index} variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                      {contribution}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
