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

const YouthTherapy: React.FC = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: '#1B5E20' }}>
          Terapia para Adolescentes
        </Typography>
        <StyledPaper elevation={0}>
          <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32' }}>
            O que é Terapia para Jovens?
          </Typography>
          <Typography paragraph align="center">
            A terapia para jovens é um espaço seguro e acolhedor onde adolescentes podem expressar suas 
            preocupações, medos e anseios. Através de uma abordagem adaptada à fase de desenvolvimento, 
            trabalhamos questões específicas da adolescência, promovendo o desenvolvimento emocional e 
            social saudável.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
            Benefícios da Terapia para Jovens
          </Typography>
          <NoBulletList>
            <li>Avaliação do desenvolvimento emocional e social</li>
            <li>Orientação vocacional e planejamento de carreira</li>
            <li>Gestão de emoções e desenvolvimento de resiliência</li>
            <li>Melhoria nas habilidades sociais e comunicação</li>
            <li>Apoio familiar e orientação aos pais</li>
            <li>Desenvolvimento de autoestima e autoconfiança</li>
            <li>Estratégias para lidar com pressão social e bullying</li>
          </NoBulletList>

          <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
            Como Funciona
          </Typography>
          <Typography paragraph align="center">
            As sessões são realizadas semanalmente, com duração de 50 minutos. O processo terapêutico 
            é adaptado à idade e necessidades do adolescente, utilizando técnicas e abordagens apropriadas 
            para esta fase do desenvolvimento.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: '#2E7D32', mt: 4 }}>
            Quando Buscar Ajuda?
          </Typography>
          <Typography paragraph align="center">
            A terapia pode ser benéfica quando o adolescente apresenta:
          </Typography>
          <NoBulletList>
            <li>Dificuldades de relacionamento com família e amigos</li>
            <li>Problemas de autoestima e autoconfiança</li>
            <li>Ansiedade e estresse</li>
            <li>Dificuldades escolares</li>
            <li>Mudanças de humor significativas</li>
            <li>Dificuldades de adaptação</li>
            <li>Questões relacionadas à identidade</li>
          </NoBulletList>
        </StyledPaper>
      </Container>
    </PageContainer>
  );
};

export default YouthTherapy; 