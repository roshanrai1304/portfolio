import { Container, Typography, Grid, Card, CardContent, Box, Button, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Research = () => {
  const publications = [
    {
      title: "Complementary Product Recommendation using Siamese Neural Network",
      journal: "IEEE",
      date: "March 2023",
      abstract: "This paper presents a content-based recommendation system using Siamese Neural Networks (SNN) to identify complementary products in e-commerce, enhancing user experience by recommending items based on user traits, demographics, and past interactions, with an extension to improve recommendation efficiency using the KNN algorithm.",
      link: "https://ieeexplore.ieee.org/abstract/document/10104621",
      keywords: ["Deep Learning", "Siamese Neural Network", "E-commerce", "Recommendation System"]
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
          Research Publications
        </Typography>

        <Grid container spacing={4}>
          {publications.map((publication, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
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
                      boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)'
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <ArticleIcon sx={{ color: '#64ffda', mr: 1 }} />
                      <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{ color: '#64ffda', mb: 0 }}
                      >
                        {publication.title}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <SchoolIcon sx={{ color: '#8892b0', mr: 1, fontSize: '0.9rem' }} />
                      <Typography 
                        variant="subtitle1" 
                        sx={{ color: '#ccd6f6' }}
                      >
                        {publication.journal}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CalendarTodayIcon sx={{ color: '#8892b0', mr: 1, fontSize: '0.9rem' }} />
                      <Typography 
                        variant="subtitle2" 
                        sx={{ color: '#8892b0' }}
                      >
                        {publication.date}
                      </Typography>
                    </Box>
                    
                    <Typography 
                      variant="body1" 
                      paragraph
                      sx={{ color: '#8892b0', mb: 3 }}
                    >
                      {publication.abstract}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {publication.keywords.map((keyword, i) => (
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
                          {keyword}
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
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Publication
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Research; 