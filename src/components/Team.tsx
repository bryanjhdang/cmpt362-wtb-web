import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, List, ListItem, Container, Box } from '@mui/material';

const teamMembers = [
  {
    name: "Bryan",
    contributions: ["Project Pitch", "GTFS Realtime", "This Website"]
  },
  {
    name: "Ethan",
    contributions: ["Mongo Database", "Feature G", "Feature H", "Feature I", "Feature J"]
  },
  {
    name: "Josh",
    contributions: ["Class design", "Feature L", "Feature M", "Feature N", "Feature O"]
  },
  {
    name: "Johnny",
    contributions: ["GTFS Static", "NFC Tap", "Notifications"]
  },
  {
    name: "Jonathan",
    contributions: ["Mongo Database", "Show and Tell 2"]
  },
];

export default function Team() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'secondary.main',
        padding: '1.5rem 0',
      }}
    >
      <Container maxWidth="md" sx={{ py: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Team Effort Breakdown
        </Typography>
        <Typography variant='h6' gutterBottom>
          What did we work on?
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {member.name}
                  </Typography>
                  <List>
                    {member.contributions.map((contribution, index) => (
                      <ListItem key={index}>{contribution}</ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
