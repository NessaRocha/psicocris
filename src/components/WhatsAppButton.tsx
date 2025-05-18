import React from 'react';
import { styled } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingButton = styled('a')(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  backgroundColor: '#25D366',
  color: 'white',
  zIndex: 9999,
  borderRadius: '50%',
  width: 60,
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#128C7E',
    transform: 'scale(1.1)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 44,
    height: 44,
    bottom: theme.spacing(10),
    right: theme.spacing(2),
  },
}));

const whatsappNumber = '5551996024420';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar uma consulta.`;

const WhatsAppButton: React.FC = () => (
  <FloatingButton
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    title="Fale conosco pelo WhatsApp"
  >
    <WhatsAppIcon sx={{ fontSize: { xs: 28, sm: 32, md: 40 } }} />
  </FloatingButton>
);

export default WhatsAppButton; 