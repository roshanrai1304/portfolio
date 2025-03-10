import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Container>
      <Box sx={{ 
        minHeight: '90vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#64ffda',
                fontSize: '18px',
                mb: 3,
                fontFamily: 'monospace'
              }}
            >
              Hi, my name is
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Typography 
              variant="h1" 
              sx={{
                color: '#ccd6f6',
                fontSize: { xs: '40px', md: '80px' },
                fontWeight: 600,
                letterSpacing: '-2px',
                mb: 2
              }}
            >
              Roshan Rai.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Typography 
              variant="h2" 
              sx={{
                color: '#8892b0',
                fontSize: { xs: '30px', md: '60px' },
                fontWeight: 600,
                letterSpacing: '-1px',
                mb: 4
              }}
            >
              Transforming ideas into intelligent solutions.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '600px', 
                mb: 6,
                fontSize: '18px',
                lineHeight: 1.8
              }}
            >
             I'm a developer passionate about AI, automation, and problem-solving. 
             I specialize in building smart, data-driven systems that streamline processes and deliver meaningful insights.
              Whether it's optimizing workflows or developing scalable applications, I love turning complex challenges into innovative solutions.
            </Typography>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{
              background: 'transparent',
              border: '1px solid #64ffda',
              color: '#64ffda',
              padding: '20px 28px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontFamily: 'monospace',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 10px rgba(100, 255, 218, 0.1)'
            }}
          >
            Check out my work!
          </motion.button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home; 