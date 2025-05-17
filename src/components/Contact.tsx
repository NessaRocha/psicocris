import React from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: '80px 20px',
  background: 'linear-gradient(180deg, #f5f5f5 80%, #e9e6e1 100%)',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '40px',
  borderRadius: '10px',
  background: 'rgba(233,230,225,0.7)',
  height: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  border: 'none',
  boxShadow: 'none',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  color: '#566542',
}));

const MapBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 260,
  borderRadius: 10,
  overflow: 'hidden',
  marginTop: 24,
  boxShadow: theme.shadows[1],
  flex: 1,
}));

const Contact = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <ContactContainer id="contact" sx={{ background: `linear-gradient(180deg, ${theme.palette.background.default} 80%, ${theme.palette.background.paper} 100%)` }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ color: theme.palette.text.primary, mb: 6, fontWeight: 800 }}>
        Entre em Contato
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          gap: 4,
          justifyContent: 'center',
          alignItems: 'stretch',
          maxWidth: 1600,
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            minWidth: 0,
            display: 'flex',
          }}
        >
          <StyledPaper elevation={3} sx={{ width: '100%', background: theme.palette.background.paper }}>
            <form>
              <TextField
                fullWidth
                label="Nome"
                variant="outlined"
                margin="normal"
                required
                InputLabelProps={{ style: { color: theme.palette.text.primary } }}
                InputProps={{ style: { color: theme.palette.text.primary } }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                required
                type="email"
                InputLabelProps={{ style: { color: theme.palette.text.primary } }}
                InputProps={{ style: { color: theme.palette.text.primary } }}
              />
              <TextField
                fullWidth
                label="Telefone"
                variant="outlined"
                margin="normal"
                required
                InputLabelProps={{ style: { color: theme.palette.text.primary } }}
                InputProps={{ style: { color: theme.palette.text.primary } }}
              />
              <TextField
                fullWidth
                label="Mensagem"
                variant="outlined"
                margin="normal"
                required
                multiline
                rows={4}
                InputLabelProps={{ style: { color: theme.palette.text.primary } }}
                InputProps={{ style: { color: theme.palette.text.primary } }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{
                  mt: 2,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.getContrastText(theme.palette.primary.main),
                  fontWeight: 700,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Enviar Mensagem
              </Button>
            </form>
          </StyledPaper>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            minWidth: 0,
            display: 'flex',
          }}
        >
          <StyledPaper elevation={3} sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', background: theme.palette.background.paper }}>
            <ContactInfo sx={{ color: theme.palette.primary.main }}>
              <LocationOnIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
              <Typography sx={{ color: theme.palette.text.primary }}>Rua Joaquim Porto, 496, sala 5 - Torres, RS, 95560-000</Typography>
            </ContactInfo>
            <ContactInfo sx={{ color: theme.palette.primary.main }}>
              <PhoneIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
              <Typography sx={{ color: theme.palette.text.primary }}>(51) 99602-4420</Typography>
            </ContactInfo>
            <ContactInfo sx={{ color: theme.palette.primary.main }}>
              <InstagramIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
              <Typography component="a" href="https://www.instagram.com/psicocrishendler/" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: '#a97c50', fontWeight: 600, '&:hover': { color: theme.palette.primary.dark } }}>
                @psicocrishendler
              </Typography>
            </ContactInfo>
            <MapBox>
              <iframe
                title="Google Maps"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps?q=Rua+Joaquim+Porto,+496,+sala+5,+Torres,+RS,+95560-000&output=embed"
                allowFullScreen
              ></iframe>
            </MapBox>
          </StyledPaper>
        </Box>
      </Box>
    </ContactContainer>
  );
};

export default Contact; 