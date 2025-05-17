import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Slide, Paper } from '@mui/material';

const COOKIE_KEY = 'cookieAccepted';

const CookieBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) setOpen(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setOpen(false);
  };

  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Paper
        elevation={6}
        sx={{
          position: 'fixed',
          bottom: 24,
          left: 0,
          right: 0,
          width: '100%',
          p: { xs: 1.5, sm: 2, md: 3 },
          zIndex: 3000,
          background: '#1f301d',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" sx={{ mb: 2, fontSize: { xs: 13, sm: 15 } }}>
          Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <a href="#" style={{ color: '#B7C9A8', textDecoration: 'underline' }}>Política de Privacidade</a>.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="success" onClick={handleAccept}>
            Aceitar
          </Button>
        </Box>
      </Paper>
    </Slide>
  );
};

export default CookieBanner; 