import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, bottom: 15 }}
          animate={{ opacity: 1, bottom: 25 }}
          exit={{ opacity: 0, bottom: 15 }}
          style={{
            position: 'fixed',
            right: 25,
            zIndex: 1000,
          }}
        >
          <Fab
            size="medium"
            aria-label="scroll back to top"
            onClick={scrollToTop}
            sx={{
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
              border: '2px solid #64ffda',
              color: '#64ffda',
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.2)',
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 