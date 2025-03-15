import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Home = () => {
  const [activeWord, setActiveWord] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Keywords that will be highlighted
  const keywords = [
    { word: "AI", color: "#FF5252" },
    { word: "automation", color: "#FFD740" },
    { word: "problem-solving", color: "#64FFDA" },
    { word: "data-driven", color: "#448AFF" },
    { word: "streamline", color: "#B388FF" },
    { word: "insights", color: "#69F0AE" },
    { word: "optimizing", color: "#FF80AB" },
    { word: "scalable", color: "#40C4FF" },
    { word: "innovative", color: "#FFAB40" }
  ];

  useEffect(() => {
    // Set visibility after a short delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    // Start cycling through keywords
    let index = 0;
    const interval = setInterval(() => {
      setActiveWord(keywords[index].word);
      index = (index + 1) % keywords.length;
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  // Function to highlight keywords in text
  const highlightText = (text) => {
    let result = [];
    let lastIndex = 0;
    
    keywords.forEach(({ word, color }) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      let match;
      
      while ((match = regex.exec(text)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
          result.push(
            <span key={`text-${lastIndex}`}>
              {text.substring(lastIndex, match.index)}
            </span>
          );
        }
        
        // Add the highlighted word
        const isActive = word.toLowerCase() === activeWord?.toLowerCase();
        result.push(
          <motion.span
            key={`highlight-${match.index}`}
            style={{ 
              color: color,
              fontWeight: isActive ? 700 : 600,
              position: 'relative',
              display: 'inline-block'
            }}
            animate={isActive ? {
              scale: [1, 1.2, 1],
              y: [0, -5, 0]
            } : {}}
            transition={{ duration: 0.5 }}
          >
            {isActive && (
              <motion.span
                style={{
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: color,
                  borderRadius: '2px'
                }}
                layoutId="underline"
              />
            )}
            {match[0]}
          </motion.span>
        );
        
        lastIndex = match.index + match[0].length;
      }
    });
    
    // Add any remaining text
    if (lastIndex < text.length) {
      result.push(
        <span key={`text-${lastIndex}`}>
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    return result.length > 0 ? result : text;
  };

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
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Box
              sx={{
                position: 'relative',
                maxWidth: '700px',
                mb: 6,
                p: 4,
                borderRadius: '10px',
                background: 'rgba(10, 25, 47, 0.7)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #64ffda, #448AFF, #FF5252, #FFD740)',
                  backgroundSize: '300% 100%',
                  animation: 'gradient 5s ease infinite',
                }
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '20px',
                  lineHeight: 1.8,
                  color: '#a8b2d1',
                  textShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                  '& span': {
                    transition: 'color 0.3s ease, transform 0.3s ease',
                  }
                }}
              >
                {highlightText("I'm a developer passionate about AI, automation, and problem-solving. I specialize in building smart, data-driven systems that streamline processes and deliver meaningful insights. Whether it's optimizing workflows or developing scalable applications, I love turning complex challenges into innovative solutions.")}
              </Typography>
              
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '150px',
                  height: '150px',
                  opacity: 0.1,
                  background: 'radial-gradient(circle, rgba(100, 255, 218, 0.8) 0%, rgba(10, 25, 47, 0) 70%)',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  animation: 'pulse 4s ease-in-out infinite alternate',
                }}
              />
            </Box>
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
      
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.1; }
        }
      `}</style>
    </Container>
  );
};

export default Home; 