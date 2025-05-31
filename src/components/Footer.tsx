import React from 'react';
import { Box, Container, Typography, Link, Stack, Grid } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1f301d',
  color: '#e9e6e1',
  padding: theme.spacing(6, 0, 4, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #566542 0%, #B7C9A8 100%)',
  }
}));

const EmergencyBox = styled(Box)(({ theme }) => ({
  lineHeight: 1.6,
  textAlign: 'left',
  backgroundColor: 'rgba(233, 230, 225, 0.08)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(3, 4),
  maxWidth: 480,
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    maxWidth: '100%',
  },
}));

const NavLinks = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  '& a': {
    color: '#e9e6e1',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.2s',
    '&:hover': {
      color: '#B7C9A8',
      textDecoration: 'underline',
    }
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(0.1),
    margin: theme.spacing(2, 2, 2, 2),
    '& a': {
      fontSize: 18,
      padding: theme.spacing(1, 0),
      width: '100%',
      textAlign: 'center',
      borderRadius: 6,
    },
  },
}));

const Credit = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: '0.8rem',
  color: 'rgba(233, 230, 225, 0.6)',
  '& a': {
    color: 'rgba(233, 230, 225, 0.7)',
    textDecoration: 'underline',
    '&:hover': {
      color: '#e9e6e1',
    }
  }
}));

// SVG customizado para TikTok
const TikTokIcon = (props: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.5 2h3.1c.2 2.1 1.6 3.7 3.4 3.9v3.1c-.9-.1-1.7-.3-2.5-.6v7.7c0 3.2-2.2 5.1-5.1 5.1-2.6 0-4.7-2-4.7-4.7 0-2.6 2-4.7 4.7-4.7.2 0 .4 0 .6.1v3.2c-.2-.1-.4-.1-.6-.1-1.1 0-2 .9-2 2 0 1.1.9 2 2 2 1.2 0 2.1-.8 2.1-2.2V2z" />
  </svg>
);

const Footer = () => {
  const theme = useTheme();

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <EmergencyBox>
              <Typography variant="h6" component="strong" sx={{ display: 'block', mb: 1, color: '#e9e6e1' }}>
                INFORMAÇÕES DE EMERGÊNCIA E CRISE
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: '#e9e6e1' }}>
                Se você ou alguém que você conhece estiver passando por uma crise emocional ou situação de emergência,
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: '#e9e6e1' }}>
                ligue para o <strong>CVV no 188</strong> (apoio emocional gratuito e sigiloso, 24h por dia).
              </Typography>
              <Typography variant="body2" sx={{ color: '#e9e6e1' }}>
                Em caso de risco à vida, ligue para o <strong>SAMU – 192</strong> ou vá ao pronto-socorro mais próximo.
              </Typography>
            </EmergencyBox>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', md: 'flex-start' }, height: '100%' }}>
            <Box sx={{ width: '100%', maxWidth: 420 }}>
              <Typography variant="h6" sx={{ mb: { xs: 3, md: 2 }, color: '#e9e6e1', fontWeight: 700, textAlign: 'center' }}>
                Psicólogo Cristian Hendler | CRP 07/42111
              </Typography>
              <NavLinks
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                divider={typeof window !== 'undefined' && window.innerWidth >= 600 ? <Box sx={{ width: '1px', height: '20px', bgcolor: 'rgba(233, 230, 225, 0.2)' }} /> : undefined}
              >
                <Link href="#inicio" underline="none">Início</Link>
                <Link href="#sobre" underline="none">Sobre</Link>
                <Link href="#servicos" underline="none">Serviços</Link>
                <Link href="#contato" underline="none">Contato</Link>
              </NavLinks>
              <Credit align={theme.breakpoints.down('md') ? 'center' : 'left'}>
                © 2025 Cristian Hendler. Todos os direitos reservados. <br />
                by <Link href="https://www.linkedin.com/in/vanessa-rocha86/" target="_blank" rel="noopener noreferrer">
                  Vanessa Rocha
                </Link>
                <span style={{ marginLeft: 8, fontSize: 10, opacity: 0.4 }}>
                  |
                  <Link href="/admin" underline="none" sx={{ fontSize: 10, color: '#e9e6e1', opacity: 0.4, ml: 0.5, '&:hover': { opacity: 1, color: '#B7C9A8' } }}>
                    Área restrita
                  </Link>
                </span>
              </Credit>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 