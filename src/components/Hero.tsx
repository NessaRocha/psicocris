import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logoCris from '../assets/logoCris.svg';
import VerifiedIcon from '@mui/icons-material/Verified';
import heroBg from '../assets/hero-bg.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  background: '#566542',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: theme.spacing(12, 2, 0, 2),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(8, 2, 4, 2),
    minHeight: '60vh',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 1, 2, 1),
    minHeight: '50vh',
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: 700,
  zIndex: 2,
  textAlign: 'center',
  padding: theme.spacing(6, 2, 6, 2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 0, 3, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0, 2, 0),
  },
}));

const CRPBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  color: '#a97c50',
  borderRadius: 12,
  fontWeight: 800,
  fontSize: 20,
  px: 5,
  py: 1.5,
  boxShadow: '0 2px 12px rgba(86,101,66,0.10)',
  letterSpacing: 1,
  mb: 2,
}));

const LogoDecorativo = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: 60,
  top: '50%',
  transform: 'translateY(-50%)',
  width: 220,
  opacity: 0.15,
  zIndex: 1,
  pointerEvents: 'none',
  filter: theme.palette.mode === 'dark' ? 'brightness(2) grayscale(1)' : 'none',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Hero = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  return (
    <HeroSection sx={{ 
      background: isLight ? '#dbe5ce' : '#1f301d',
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Overlay fosco */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: isLight ? 'rgba(86,101,66,0.10)' : 'rgba(183,201,168,0.08)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <HeroContent sx={{ position: 'relative', zIndex: 2 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: { xs: 'stretch', sm: 'center' }, 
            justifyContent: 'center', 
            gap: { xs: 0, sm: 2 }, 
            mb: 2, 
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: 'wrap',
          }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              color: '#566542', 
              fontWeight: 800, 
              letterSpacing: 1, 
              fontFamily: 'serif', 
              mb: { xs: 1, sm: 0 }, 
              lineHeight: 1,
              fontSize: { xs: 26, sm: 36, md: 56 },
              textAlign: { xs: 'center', sm: 'center', md: 'center' },
              wordBreak: 'break-word',
            }}
          >
            Cristian Hendler
          </Typography>
          <CRPBadge sx={{ alignSelf: { xs: 'center', sm: 'flex-end' }, mt: { xs: 0, sm: 0.5 } }}>
            <VerifiedIcon sx={{ color: '#a97c50', fontSize: 22, mr: 0.5 }} />
            CRP 07/42111
          </CRPBadge>
        </Box>
        <Typography sx={{ color: '#566542', fontSize: { xs: 16, sm: 20, md: 22 }, fontWeight: 500, mb: 4, mt: 2 }}>
          <Box component="span" sx={{ whiteSpace: { xs: 'normal', sm: 'nowrap' } }}>
            Atendimento presencial em Torres/RS e online para todo o Brasil.
          </Box>
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: isLight ? '#566542' : theme.palette.primary.main,
            color: isLight ? '#fff' : '#1f301d',
            fontWeight: 700,
            fontSize: { xs: 15, sm: 18, md: 22 },
            px: { xs: 2, sm: 5, md: 7 },
            py: { xs: 1, sm: 1.5, md: 2 },
            borderRadius: 18,
            boxShadow: isLight ? '0 4px 16px rgba(86,101,66,0.12)' : '0 4px 16px rgba(86,101,66,0.12)',
            mt: 4,
            my: { xs: 3, md: 5 },
            letterSpacing: 1,
            transition: 'background 0.2s, transform 0.2s',
            minWidth: 0,
            width: { xs: '100%', sm: 'auto', md: 420 },
            maxWidth: { xs: 340, md: 420 },
            alignSelf: { xs: 'center', sm: 'unset' },
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            mx: { md: 'auto' },
            '& span': {
              whiteSpace: { xs: 'normal', md: 'nowrap' },
            },
            '&:hover': {
              background: isLight ? '#3d472e' : theme.palette.primary.dark,
              transform: 'scale(1.04)',
            },
          }}
          href="https://wa.me/5551996024420?text=Olá! Gostaria de agendar uma consulta."
          target="_blank"
          aria-label="Agende sua consulta pelo WhatsApp"
        >
          <span>Agende sua consulta agora</span>
        </Button>
      </HeroContent>
      <LogoDecorativo src={logoCris} alt="Logo PsicoCris" />
      <svg viewBox="0 0 1440 180" width="100%" height="100" style={{ display: 'block', position: 'absolute', left: 0, bottom: 0, zIndex: 2 }} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,80 C360,180 1080,0 1440,100 L1440,180 L0,180 Z" fill={isLight ? '#f5f5f5' : '#1f301d'} />
      </svg>
    </HeroSection>
  );
};

export default Hero;
