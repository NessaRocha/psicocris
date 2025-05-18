import React from 'react';
import { Box, Typography, Container, Grid, IconButton, Link, Fade, Slide } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BannerImage from '../assets/bannerr.png';

const AboutContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '80px 20px',
  background: 'linear-gradient(180deg, #f5f5f5 80%, #e9e6e1 100%)',
  overflow: 'hidden',
  backgroundImage: `url('/dots.svg'), linear-gradient(180deg, #f5f5f5 80%, #e9e6e1 100%)`,
  backgroundRepeat: 'repeat',
  backgroundSize: 'auto',
  backgroundBlendMode: 'overlay',
}));

const AuraWrapper = styled('div')({
  position: 'relative',
  width: 380,
  height: 380,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const AuraCircle = styled('div')({
  position: 'absolute',
  width: 380,
  height: 380,
  borderRadius: '50%',
  background: '#f5f5f5',
  boxShadow: '0 8px 32px rgba(86,101,66,0.10)',
  zIndex: 1,
});

const DecorativeCurve = styled('div')({
  position: 'absolute',
  left: -40,
  bottom: -30,
  width: 420,
  height: 120,
  zIndex: 0,
  pointerEvents: 'none',
});

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 460,
  height: 460,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: 220,
    height: 220,
  },
}));

const GeometricDetail = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: -18,
  left: -18,
  width: 320,
  height: 320,
  borderRadius: 0,
  background: theme.palette.mode === 'light' ? '#B7C9A8' : '#566542',
  zIndex: 1,
  boxShadow: '0 4px 24px rgba(86,101,66,0.08)',
  [theme.breakpoints.down('sm')]: {
    width: 140,
    height: 140,
    top: -8,
    left: -8,
  },
}));

const GeometricDetail2 = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 32,
  left: 48,
  width: 220,
  height: 80,
  borderRadius: 0,
  background: theme.palette.mode === 'light' ? '#566542' : '#1f301d',
  zIndex: 0,
  opacity: 0.7,
  [theme.breakpoints.down('sm')]: {
    width: 80,
    height: 30,
    top: 12,
    left: 18,
  },
}));

const ProfileImageModern = styled('img')(({ theme }) => ({
  width: 368,
  height: 368,
  objectFit: 'cover',
  borderRadius: 0,
  position: 'relative',
  zIndex: 2,
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    width: 180,
    height: 180,
  },
}));

const SocialIcons = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 18,
  margin: '16px 0 0 0',
});

const AboutText = styled('div')({
  maxWidth: 700,
  margin: '0 auto',
  textAlign: 'left',
  fontSize: 18,
  lineHeight: 1.6,
  color: '#222',
  marginTop: 24,
});

const About = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  return (
    <AboutContainer id="about" sx={{ background: isLight ? 'linear-gradient(180deg, #f5f5f5 80%, #e9e6e1 100%)' : `linear-gradient(180deg, ${theme.palette.background.default} 80%, ${theme.palette.background.paper} 100%)` }}>
      <svg viewBox="0 0 1440 80" width="100%" height="80" style={{ display: 'block', position: 'absolute', top: 0, left: 0, zIndex: 1 }} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,80 C480,0 960,160 1440,80 L1440,0 L0,0 Z" fill={isLight ? '#f5f5f5' : '#1f301d'} />
      </svg>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            <Slide in={true} direction="right" timeout={1200}>
              <ImageWrapper>
                <GeometricDetail />
                <GeometricDetail2 />
                <ProfileImageModern src={BannerImage} alt="Psicólogo Cristian Hendler" />
              </ImageWrapper>
            </Slide>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h4" component="h2" sx={{ color: isLight ? '#566542' : theme.palette.text.primary, fontWeight: 700 }} gutterBottom>
                Psicólogo Cristian Hendler
              </Typography>
              <Typography sx={{ color: isLight ? '#a97c50' : '#a97c50', fontWeight: 600, fontSize: 24, mb: 1 }}>
                CRP 07/42111
              </Typography>
              <SocialIcons>
                <a
                  href="https://www.instagram.com/psicocrishendler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: isLight ? '#566542' : theme.palette.primary.main, fontSize: 30, transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = isLight ? '#3d472e' : theme.palette.primary.dark)}
                  onMouseOut={e => (e.currentTarget.style.color = isLight ? '#566542' : theme.palette.primary.main)}
                  aria-label="Instagram"
                >
                  <InstagramIcon fontSize="inherit" />
                </a>
                <a
                  href="https://wa.me/5551996024420"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: isLight ? '#566542' : theme.palette.primary.main, fontSize: 30, transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = isLight ? '#3d472e' : theme.palette.primary.dark)}
                  onMouseOut={e => (e.currentTarget.style.color = isLight ? '#566542' : theme.palette.primary.main)}
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon fontSize="inherit" />
                </a>
                <a
                  href="https://www.linkedin.com/in/cristian-hendler-48983152/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: isLight ? '#566542' : theme.palette.primary.main, fontSize: 30, transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = isLight ? '#3d472e' : theme.palette.primary.dark)}
                  onMouseOut={e => (e.currentTarget.style.color = isLight ? '#566542' : theme.palette.primary.main)}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon fontSize="inherit" />
                </a>
              </SocialIcons>
            </Box>
            <AboutText sx={{ color: isLight ? '#222' : theme.palette.text.primary }}>
              <p>Sou psicólogo clínico formado pela Universidade Luterana do Brasil (ULBRA) – Torres/RS, com especialização em desenvolvimento infantil pela UNESC. Atuo no atendimento psicológico individual de adultos, adolescentes e crianças, auxiliando em questões emocionais, comportamentais e no desenvolvimento pessoal.</p>
              <p>Meu trabalho é pautado em oferecer um espaço seguro, acolhedor e ético, promovendo o autoconhecimento e o desenvolvimento de estratégias para enfrentar os desafios da vida. Realizo atendimentos presenciais em Torres/RS e também online.</p>
              <p>CRP 07/42111 – Conselho Regional de Psicologia do Rio Grande do Sul</p>
            </AboutText>
          </Grid>
        </Grid>
      </Container>
    </AboutContainer>
  );
};

export default About; 