import { Box, Container, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgba(10, 25, 47, 0.85)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton
              href="https://github.com/roshanrai1304?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#8892b0',
                '&:hover': {
                  color: '#64ffda',
                }
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/roshan-rai45/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#8892b0',
                '&:hover': {
                  color: '#64ffda',
                }
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Typography
            variant="body2"
            color="#8892b0"
            align="center"
          >
            © {new Date().getFullYear()} Roshan Rai. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 