import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';

const Skills = () => {
  const skills = [
    { name: "Python", level: 90, color: "#3776AB", icon: "🐍" },
    { name: "SQL", level: 85, color: "#4479A1", icon: "📊" },
    { name: "Langchain", level: 80, color: "#00FF00", icon: "🔗" },
    { name: "FastAPI", level: 90, color: "#009688", icon: "⚡" },
    { name: "PyTorch", level: 80, color: "#FF4081", icon: "🔥" },
    { name: "Airflow", level: 75, color: "#017CEE", icon: "🌊" },
    { name: "AWS", level: 80, color: "#FF9900", icon: "☁️" },
    { name: "Docker", level: 85, color: "#2496ED", icon: "🐳" },
    { name: "JavaScript", level: 85, color: "#F7DF1E", icon: "📜" },
    { name: "React", level: 85, color: "#61DAFB", icon: "⚛️" }
  ];

  return (
    <Container sx={{ py: 8 }} id="skills">
      <Typography 
        variant="h3" 
        gutterBottom
        sx={{
          color: '#ccd6f6',
          textAlign: 'center',
          mb: 6
        }}
      >
        Technical Proficiency
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 2,
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    background: 'rgba(255, 255, 255, 0.08)'
                  }
                }}
              >
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                  <CircularProgress
                    variant="determinate"
                    value={skill.level}
                    size={60}
                    thickness={4}
                    sx={{
                      color: skill.color,
                      '& .MuiCircularProgress-circle': {
                        strokeLinecap: 'round',
                      }
                    }}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ fontSize: '1.5rem' }}
                    >
                      {skill.icon}
                    </Typography>
                  </Box>
                </Box>
                <Typography 
                  variant="body1"
                  sx={{ 
                    mt: 1,
                    color: skill.color,
                    fontWeight: 500,
                    textAlign: 'center'
                  }}
                >
                  {skill.name}
                </Typography>
                <Typography 
                  variant="caption"
                  sx={{ 
                    color: '#8892b0',
                    textAlign: 'center'
                  }}
                >
                  {skill.level}%
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills; 