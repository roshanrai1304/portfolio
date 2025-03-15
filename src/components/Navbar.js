import { AppBar, Toolbar, Box, IconButton, useMediaQuery, Menu, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:768px)');
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    handleMenuClose();
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
        
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ color: '#64ffda' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  background: 'rgba(10, 25, 47, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                }
              }}
            >
              {navItems.map((item) => (
                <MenuItem 
                  key={item.name}
                  onClick={() => scrollToSection(item.name.toLowerCase())}
                  sx={{ 
                    color: '#8892b0',
                    '&:hover': { color: '#64ffda' }
                  }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
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
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 