import { Container, Typography, Grid, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';

const Experience = () => {
  const experiences = [
    {
      role: "Data Engineer",
      company: "Servify",
      period: "Jun 2024 - Present",
      description: [
        "Developed and deployed machine learning models for the Case Manager Platform, enhancing fraud detection accuracy by 30% and mitigating fraudulent claims.",
        "Automated invoice processing workflows, reducing claim resolution time from 4 days to just 1 day, achieving a 75% efficiency boost.",
        "Spearheaded the automation of phone verification and damage detection using Google Gemini, eliminating 90% of manual effort and improving operational efficiency."
      ],
      skills: ["Python","SQL", "AWS", "Docker", "FastAPI", "Langchain"],
      color: "#64ffda"
    },
    {
      role: "Data Science Engineer",
      company: "Krayo Inc.",
      period: "Jun 2023 - May 2024",
      description: [
        "Conducted in-depth data analysis to uncover actionable insights, driving strategic decision-making and operational efficiency.",
        "Developed and optimized a robust ETL pipeline, streamlining data processing and achieving a 40% reduction in processing time.",
        "Designed and implemented data-driven features for the insights section, increasing user engagement by 25% through meaningful and interactive analytics."
      ],
      skills: ["Python", "AWS", "Docker", "Flask", "Airflow", "JavaScript"],
      color: "#64ffda"
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h3" 
          gutterBottom
          sx={{
            color: '#ccd6f6',
            textAlign: 'center',
            mb: 6,
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 600
          }}
        >
          Professional Journey
        </Typography>

        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    p: 4,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      backgroundColor: exp.color,
                      boxShadow: `0 0 20px ${exp.color}`
                    }
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <WorkIcon sx={{ color: exp.color, mr: 1 }} />
                        <Typography variant="h5" sx={{ color: exp.color }}>
                          {exp.role}
                        </Typography>
                      </Box>
                      <Typography variant="h6" sx={{ color: '#ccd6f6', mb: 2 }}>
                        {exp.company}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CalendarTodayIcon sx={{ color: '#8892b0', mr: 1, fontSize: '0.9rem' }} />
                        <Typography variant="subtitle1" sx={{ color: '#8892b0' }}>
                          {exp.period}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Box sx={{ mb: 2 }}>
                        {Array.isArray(exp.description) ? (
                          exp.description.map((point, i) => (
                            <Box 
                              key={i} 
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'flex-start',
                                mb: 2
                              }}
                            >
                              <Typography 
                                sx={{ 
                                  color: exp.color,
                                  mr: 2,
                                  minWidth: '20px'
                                }}
                              >
                                ▹
                              </Typography>
                              <Typography variant="body1" sx={{ color: '#8892b0' }}>
                                {point}
                              </Typography>
                            </Box>
                          ))
                        ) : (
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                            <DescriptionIcon sx={{ color: '#8892b0', mr: 1, mt: 0.5 }} />
                            <Typography variant="body1" sx={{ color: '#8892b0' }}>
                              {exp.description}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                        {exp.skills.map((skill, i) => (
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
                            {skill}
                          </Typography>
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Experience; 