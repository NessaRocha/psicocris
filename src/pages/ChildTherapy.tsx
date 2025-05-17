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

const ChildTherapy = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: '#1B5E20' }}>
          Psicologia Infantil
        </Typography>
        <StyledPaper elevation={0}>
          <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32' }}>
            O que é Psicologia Infantil?
          </Typography>
          <Typography paragraph align="center">
            A psicologia infantil é uma área especializada que trabalha com o desenvolvimento emocional, 
            social e cognitivo das crianças. Através de técnicas lúdicas e apropriadas para cada fase do 
            desenvolvimento, ajudamos a criança a expressar suas emoções e lidar com suas dificuldades de 
            forma saudável.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
            Benefícios da Psicologia Infantil
          </Typography>
          <NoBulletList>
            <li>Avaliação do desenvolvimento infantil</li>
            <li>Terapia lúdica e jogos terapêuticos</li>
            <li>Orientação parental e familiar</li>
            <li>Desenvolvimento de habilidades sociais</li>
            <li>Acompanhamento escolar</li>
            <li>Intervenção precoce em dificuldades de desenvolvimento</li>
            <li>Suporte emocional para a criança</li>
          </NoBulletList>

          <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
            Como Funciona
          </Typography>
          <Typography paragraph align="center">
            As sessões são realizadas semanalmente, com duração de 45 minutos. O processo terapêutico 
            é conduzido através de brincadeiras, jogos e atividades lúdicas, permitindo que a criança 
            se expresse naturalmente e desenvolva suas habilidades emocionais e sociais.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
            Quando Buscar Ajuda?
          </Typography>
          <Typography paragraph align="center">
            A terapia infantil pode ser benéfica quando a criança apresenta:
          </Typography>
          <NoBulletList>
            <li>Dificuldades de comportamento</li>
            <li>Problemas de aprendizagem</li>
            <li>Dificuldades de socialização</li>
            <li>Ansiedade e medos excessivos</li>
            <li>Problemas de sono ou alimentação</li>
            <li>Dificuldades de adaptação</li>
            <li>Traumas ou situações de luto</li>
          </NoBulletList>
        </StyledPaper>
      </Container>
    </PageContainer>
  );
};

export default ChildTherapy; 