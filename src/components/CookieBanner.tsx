import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Link, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const CookieBannerContainer = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(3),
  },
}));

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <CookieBannerContainer>
      <Box sx={{ flex: 1 }}>
        <Typography variant="body1" color="text.primary" sx={{ mb: 1 }}>
          Utilizamos cookies essenciais para garantir o funcionamento adequado do site.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ao continuar navegando, você concorda com nossa{' '}
          <Link href="/politica-de-privacidade" color="primary" underline="hover">
            Política de Privacidade
          </Link>
          .
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, flexShrink: 0 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleDecline}
          sx={{ minWidth: 100 }}
        >
          Recusar
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAccept}
          sx={{ minWidth: 100 }}
        >
          Aceitar
        </Button>
      </Box>
    </CookieBannerContainer>
  );
};

export default CookieBanner; 