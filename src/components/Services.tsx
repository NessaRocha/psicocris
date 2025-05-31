import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Collapse, IconButton, Button } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ServicesContainer = styled(Box)(({ theme }) => ({
  padding: '80px 20px',
  backgroundColor: 'white',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  minHeight: 420,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  background: '#e9e6e1',
  borderRadius: '50%',
  width: 64,
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 8px rgba(86,101,66,0.10)',
  margin: '0 auto 20px auto',
}));

const ExpandButton = styled(IconButton)(({ theme }) => ({
  marginTop: '10px',
  color: '#566542',
  fontSize: 32,
  transition: 'color 0.2s, transform 0.2s',
  '&:hover': {
    color: '#3d472e',
    transform: 'translateY(2px) scale(1.12)',
  },
}));

const Services = () => {
  const services = [
    {
      icon: <SelfImprovementIcon sx={{ fontSize: 36, color: '#566542' }} />,
      title: 'Psicoterapia Individual',
      description: 'Caminhos para o autoconhecimento e equilíbrio emocional.',
      details: [
        'Tratamento personalizado',
        'Desenvolvimento de estratégias de enfrentamento',
        'Acompanhamento contínuo',
        'Promoção do autoconhecimento',
        'Apoio emocional e motivacional'
      ],
      link: '/individual-therapy'
    },
    {
      icon: <Diversity3Icon sx={{ fontSize: 36, color: '#566542' }} />,
      title: 'Terapia para Jovens',
      description: 'Apoio emocional para enfrentar desafios da adolescência.',
      details: [
        'Suporte em transições de fase de vida',
        'Gestão de emoções',
        'Desenvolvimento de habilidades sociais',
        'Apoio familiar',
        'Promoção do autoconhecimento'
      ],
      link: '/youth-therapy'
    },
    {
      icon: <EmojiEmotionsIcon sx={{ fontSize: 36, color: '#566542' }} />,
      title: 'Psicologia Infantil',
      description: 'Cuidado especializado para o desenvolvimento emocional das crianças.',
      details: [
        'Avaliação do desenvolvimento infantil',
        'Terapia lúdica',
        'Orientação parental',
        'Desenvolvimento de habilidades sociais',
        'Acompanhamento escolar'
      ],
      link: '/child-therapy'
    },
  ];

  const whatsappLink = 'https://wa.me/5551996024420?text=Olá! Gostaria de saber mais sobre os serviços de psicologia.';

  return (
    <ServicesContainer id="services" sx={{ backgroundColor: theme.palette.background.default }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ color: isLight ? '#566542' : theme.palette.text.primary, mb: 6, fontWeight: 800 }}>
        Nossos Serviços
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
        {services.map((service, index) => (
          <Box 
            key={index}
            sx={{ 
              flex: { 
                xs: '1 1 100%', 
                sm: '1 1 calc(50% - 16px)', 
                md: '1 1 calc(33.333% - 22px)' 
              },
              maxWidth: { 
                xs: '100%', 
                sm: 'calc(50% - 16px)', 
                md: 'calc(33.333% - 22px)' 
              }
            }}
          >
            <StyledCard>
              <IconWrapper>{service.icon}</IconWrapper>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom align="center" sx={{ color: isLight ? '#566542' : theme.palette.text.primary, fontWeight: 700 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" align="center" sx={{ color: isLight ? '#7a5430' : theme.palette.text.secondary }}>
                  {service.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ color: isLight ? '#7a5430' : '#a97c50', fontWeight: 700, fontSize: 18, mb: 1 }}>
                    Benefícios incluem:
                  </Typography>
                  <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 1 }}>
                    {service.details.map((detail, i) => (
                      <Typography key={i} variant="body2" sx={{ color: isLight ? '#566542' : theme.palette.text.primary, fontWeight: 500, textAlign: 'left', ml: 0 }}>
                        {detail}
                      </Typography>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2, backgroundColor: theme.palette.primary.main, color: theme.palette.getContrastText(theme.palette.primary.main), fontWeight: 700, '&:hover': { backgroundColor: theme.palette.primary.dark } }}
                    href={whatsappLink}
                    target="_blank"
                  >
                    Saiba mais
                  </Button>
                </Box>
              </CardContent>
            </StyledCard>
          </Box>
        ))}
      </Box>
    </ServicesContainer>
  );
};

export default Services; 