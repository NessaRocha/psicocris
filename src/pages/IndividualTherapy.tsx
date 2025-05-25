import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const NoBulletList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  textAlign: 'center',
});

const IndividualTherapy: React.FC = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: '#1B5E20' }}>
          Terapia para Adultos
        </Typography>
        <StyledPaper elevation={0}>
          <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32' }}>
            O que é Psicoterapia Individual?
          </Typography>
          <Typography paragraph align="center">
            A psicoterapia individual é um processo terapêutico personalizado que visa auxiliar o indivíduo 
            a compreender e lidar com suas questões emocionais, comportamentais e psicológicas. Através de 
            um ambiente seguro e acolhedor, o paciente pode explorar seus pensamentos, sentimentos e 
            comportamentos, desenvolvendo estratégias para enfrentar os desafios da vida.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
            Benefícios da Psicoterapia Individual
          </Typography>
          <NoBulletList>
            <li>Tratamento focado nas necessidades específicas do paciente</li>
            <li>Desenvolvimento de estratégias de enfrentamento</li>
            <li>Acompanhamento contínuo e progressivo</li>
            <li>Melhora na qualidade de vida e bem-estar</li>
            <li>Autoconhecimento e crescimento pessoal</li>
          </NoBulletList>

          <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
            Como Funciona
          </Typography>
          <Typography paragraph align="center">
            As sessões são realizadas semanalmente, com duração de 50 minutos cada. O processo terapêutico 
            é conduzido de forma ética e profissional, respeitando a individualidade e o tempo de cada paciente.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
            Quando Buscar Ajuda?
          </Typography>
          <Typography paragraph align="center">
            A psicoterapia pode ser benéfica em diversos momentos da vida, como:
          </Typography>
          <NoBulletList>
            <li>Dificuldades emocionais</li>
            <li>Problemas de relacionamento</li>
            <li>Ansiedade e estresse</li>
            <li>Depressão</li>
            <li>Traumas</li>
            <li>Dificuldades de adaptação</li>
            <li>Busca por autoconhecimento</li>
          </NoBulletList>
        </StyledPaper>
      </Container>
    </PageContainer>
  );
};

export default IndividualTherapy; 