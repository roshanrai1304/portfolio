import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: '#64ffda' }} />,
      title: "Email",
      value: "roshanrai1304@gmail.com",
      link: "mailto:roshanrai1304@gmail.com"
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: '#64ffda' }} />,
      title: "Location",
      value: "Mumbai, India",
    },
    {
      icon: <LocalCafeIcon sx={{ fontSize: 40, color: '#64ffda' }} />,
      title: "Let's Connect",
      value: "Open for chats and discussions",
    }
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
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
            mb: 2,
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 600
          }}
        >
          Contact
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            mb: 6, 
            color: '#8892b0' 
          }}
        >
          Get in touch with me
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 4,
          maxWidth: '600px',
          mx: 'auto'
        }}>
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  p: 3,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                {info.icon}
                <Box>
                  <Typography variant="h6" sx={{ color: '#64ffda', mb: 0.5 }}>
                    {info.title}
                  </Typography>
                  {info.link ? (
                    <a 
                      href={info.link}
                      style={{ 
                        color: '#8892b0',
                        textDecoration: 'none',
                      }}
                      onMouseOver={(e) => e.target.style.color = '#64ffda'}
                      onMouseOut={(e) => e.target.style.color = '#8892b0'}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <Typography sx={{ color: '#8892b0' }}>
                      {info.value}
                    </Typography>
                  )}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;
