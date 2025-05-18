import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 800 }}>
          Política de Privacidade
        </Typography>

        <StyledPaper elevation={0}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
            1. Introdução
          </Typography>
          <Typography paragraph>
            Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você visita ou interage com nosso site.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mb: 3, mt: 4, fontWeight: 600 }}>
            2. Informações que Coletamos
          </Typography>
          <Typography paragraph>
            Coletamos apenas informações essenciais para o funcionamento do site e para responder às suas mensagens de contato:
          </Typography>
          <ul>
            <Typography component="li" paragraph>
              Nome
            </Typography>
            <Typography component="li" paragraph>
              Email
            </Typography>
            <Typography component="li" paragraph>
              Telefone
            </Typography>
            <Typography component="li" paragraph>
              Mensagem (quando você utiliza o formulário de contato)
            </Typography>
          </ul>

          <Typography variant="h5" gutterBottom sx={{ mb: 3, mt: 4, fontWeight: 600 }}>
            3. Uso de Cookies
          </Typography>
          <Typography paragraph>
            Utilizamos apenas cookies essenciais para garantir o funcionamento adequado do site. Não utilizamos cookies de rastreamento ou analytics.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mb: 3, mt: 4, fontWeight: 600 }}>
            4. Como Usamos Suas Informações
          </Typography>
          <Typography paragraph>
            As informações coletadas são utilizadas exclusivamente para:
          </Typography>
          <ul>
            <Typography component="li" paragraph>
              Responder às suas mensagens de contato
            </Typography>
            <Typography component="li" paragraph>
              Melhorar a experiência de navegação
            </Typography>
            <Typography component="li" paragraph>
              Garantir a segurança do site
            </Typography>
          </ul>

          <Typography variant="h5" gutterBottom sx={{ mb: 3, mt: 4, fontWeight: 600 }}>
            5. Compartilhamento de Dados
          </Typography>
          <Typography paragraph>
            Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para o funcionamento do site ou quando exigido por lei.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mb: 3, mt: 4, fontWeight: 600 }}>
            6. Seus Direitos
          </Typography>
          <Typography paragraph>
            Você tem o direito de:
          </Typography>
          <ul>
            <Typography component="li" paragraph>
              Acessar suas informações pessoais
            </Typography>
            <Typography component="li" paragraph>
              Solicitar a correção de dados imprecisos
            </Typography>
            <Typography component="li" paragraph>
              Solicitar a exclusão de seus dados
            </Typography>
            <Typography component="li" paragraph>
              Retirar seu consentimento a qualquer momento
            </Typography>
          </ul>

          <Typography variant="h5" gutterBottom sx={{ mb: 3, mt: 4, fontWeight: 600 }}>
            7. Contato
          </Typography>
          <Typography paragraph>
            Para questões relacionadas à privacidade, entre em contato através do formulário de contato do site.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mb: 3, mt: 4, fontWeight: 600 }}>
            8. Alterações
          </Typography>
          <Typography paragraph>
            Podemos atualizar esta política de privacidade periodicamente. A versão mais recente estará sempre disponível nesta página.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </Typography>
        </StyledPaper>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy; 