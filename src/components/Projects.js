import { Container, Grid, Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "AI Powered Software Development Workflow",
      description: "Developed an automated software development workflow using LangGraph and Google's Gemini AI. It simulates a complete software development lifecycle with AI agents playing different roles in the development process.",
      technologies: ["Python", "LangGraph", "FastAPI", "Gemini"],
      link: "https://github.com/roshanrai1304/AI-Powered-Software-Development-Workflow",
      color: "#3776AB"
    },
    {
      title: "AI Interview Bot",
      description: "An intelligent interview assistant that helps companies conduct consistent, unbiased, and efficient technical interviews. Powered by Google's Gemini Pro AI model, this system provides a structured interview experience while saving time and resources.",
      technologies: ["Python", "FastAPI", "Gemini", "React"],
      link: "https://github.com/roshanrai1304/AI-Interviewer-Bot",
      color: "#61DAFB"
    },
    {
      title: "Complementary Products Recommendation",
      description: "Built a recommendation system that recommends complementary products based on the collaborative filtering algorithm and using LSTM techniques.",
      technologies: ["Python", "Flask", "LSTM", "JavaScript"],
      link: "https://github.com/roshanrai1304/complementary-products-recommendation",
      color: "#000000"
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography 
        variant="h3" 
        gutterBottom
        sx={{
          color: '#ccd6f6',
          textAlign: 'center',
          mb: 6
        }}
      >
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: `0 10px 30px rgba(${project.color}, 0.1)`
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ color: '#64ffda' }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ color: '#8892b0' }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {project.technologies.map((tech, i) => (
                      <Typography
                        key={i}
                        sx={{
                          px: 2,
                          py: 0.5,
                          borderRadius: '15px',
                          fontSize: '0.875rem',
                          background: 'rgba(100, 255, 218, 0.1)',
                          color: '#64ffda',
                          border: '1px solid #64ffda'
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button 
                    size="large" 
                    sx={{
                      color: '#64ffda',
                      borderColor: '#64ffda',
                      '&:hover': {
                        borderColor: '#64ffda',
                        background: 'rgba(100, 255, 218, 0.1)'
                      }
                    }}
                    variant="outlined"
                    href={project.link}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 