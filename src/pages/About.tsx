import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet';

const PageContainer = styled(Box)(({ theme }) => ({
  padding: '80px 20px',
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '40px',
  marginTop: 0,
  backgroundColor: 'white',
  boxShadow: 'none',
}));

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Cris Hendler Psicólogo (@crishendlerpsico) | Torres RS</title>
        <meta name="description" content="Conheça Cris Hendler Psicólogo (@crishendlerpsico) - Psicólogo em Torres RS, CRP 07/42111. Especialista em psicologia clínica com atendimento presencial e online." />
        <meta name="keywords" content="cris psicologo torres, psicologo cristian hendler, psicologo em torres rs, psicologo online torres, psicologo cris, psicologo torres rs, psicologo cristian, psicologo cris torres, psicologo cris rs, psicologo cris hendler" />
      </Helmet>
      <PageContainer>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: '#1B5E20' }}>
            Sobre Cris Hendler Psicólogo
          </Typography>
          <StyledPaper elevation={0}>
            <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32' }}>
              @crishendlerpsico | CRP 07/42111
            </Typography>
            <Typography paragraph>
              Sou o Psicólogo Cristian Hendler, conhecido como @crishendlerpsico, CRP 07/42111, atuando em Torres/RS. 
              Como psicólogo em Torres, ofereço atendimento psicológico de qualidade tanto presencial quanto online. 
              Especialista em psicologia clínica com foco em terapia para adultos, adolescentes e crianças.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
              Psicólogo em Torres RS - Formação e Especializações
            </Typography>
            <Typography paragraph>
              • Graduação em Psicologia
              • Especialização em Psicologia Clínica
              • Formação em Terapia Cognitivo-Comportamental
              • Experiência em atendimento psicológico em Torres RS
              • Psicólogo especializado em terapia para todas as idades
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
              Atendimento Psicológico em Torres
            </Typography>
            <Typography paragraph>
              Como psicólogo em Torres RS, ofereço atendimento psicológico personalizado, adaptado às necessidades 
              de cada paciente. Meu objetivo como psicólogo é proporcionar um espaço seguro e acolhedor para que 
              você possa trabalhar suas questões emocionais e desenvolver seu potencial.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
              Psicólogo em Torres RS - Localização
            </Typography>
            <Typography paragraph>
              Atendo como psicólogo em Torres/RS, com consultório localizado em um ambiente tranquilo e acolhedor. 
              Também ofereço atendimento psicológico online para maior comodidade dos pacientes de Torres e região.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
              Redes Sociais
            </Typography>
            <Typography paragraph>
              Siga @crishendlerpsico nas redes sociais para acompanhar dicas de saúde mental, 
              informações sobre psicologia e novidades sobre o atendimento.
            </Typography>
          </StyledPaper>
        </Container>
      </PageContainer>
    </>
  );
};

export default About; 