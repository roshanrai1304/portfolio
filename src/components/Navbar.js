import { AppBar, Toolbar, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', number: '01.' },
    { name: 'Skills', number: '02.' },
    { name: 'Projects', number: '03.' },
    { name: 'Research', number: '04.' },
    { name: 'Experience', number: '05.' },
    { name: 'Contact', number: '06.' }
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(10, 25, 47, 0.85)', 
        backdropFilter: 'blur(10px)',
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconButton 
            sx={{ color: '#64ffda' }}
            onClick={() => scrollToSection('home')}
          >
            {/* Add your logo here */}
            <span style={{ fontSize: '24px' }}>⬡</span>
          </IconButton>
        </motion.div>
        
        <Box sx={{ display: 'flex', gap: 4 }}>
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ 
                y: -2,
                color: '#64ffda',
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#8892b0',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
                padding: '8px 0',
                position: 'relative',
                transition: 'color 0.3s ease'
              }}
              onClick={() => scrollToSection(item.name.toLowerCase())}
            >
              <motion.span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: '#64ffda',
                  transformOrigin: 'left',
                  scaleX: 0
                }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              {item.name}
            </motion.button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 