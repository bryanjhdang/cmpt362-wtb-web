import { Grid, Typography, Container, Box } from '@mui/material';
import ThreadDiagram from '../assets/thread-diagram.png'

const teamMembers = [
  {
    name: "Bryan",
    contributions: ["GTFS Realtime API,", "Web Design,", "Protobuf Integration,", "Schedule Trips,", "UI/UX Design"]
  },
  {
    name: "Ethan",
    contributions: ["Database Integration,", "Stop Adapters,", "Database Helper Functions"]
  },
  {
    name: "Josh",
    contributions: ["Class Modelling,", "UI Mockups,", "Boilerplate/Fragment Setup,", "Scheduled Trips,", "Notifications"]
  },
  {
    name: "Johnny",
    contributions: ["GTFS Static,", "NFC Tap,", "Notifications,", "Stop Searches,", "Favorite Stops"]
  },
  {
    name: "Jonathan",
    contributions: ["Database Setup,", "UI Mockups,", "Nearby Bus Stops,", "Location Service"]
  },
];

export default function Team() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#8fc5e0',
          padding: '1.2rem 0',
          color: '#0e3e59'
        }}
      >
        <Container maxWidth="md" sx={{ pt: 8, pb: 4, borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom pb={2} sx={{ fontWeight: 'bold' }}>
            Team Breakdown
          </Typography>
          {/* Map through each team member and display name and contributions side by side */}
          <Grid container spacing={2}>
            {teamMembers.map((member) => (
              <Grid item xs={12} key={member.name}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'flex-start', paddingBottom: '0.5rem' }}>
                  {/* Left side - Team member name */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {member.name}
                    </Typography>
                  </Box>

                  {/* Right side - Contributions as inline items */}
                  <Box sx={{ flex: 4, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '0.5rem' }}>
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#8fc5e0',
          padding: '1.2rem 0',
          color: '#0e3e59'
        }}
      >
        <Container maxWidth="md" sx={{ pb: 4, borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom pb={2} sx={{ fontWeight: 'bold' }}>
            Thread Diagram
          </Typography>
          <img
            src={ThreadDiagram}
            alt="Thread Diagram"
            style={{
              maxWidth: '100%',
              height: 'auto',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }} />
        </Container>
      </Box>
    </>
  );
}
