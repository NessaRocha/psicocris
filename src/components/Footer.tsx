import { Box, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';

// SVG customizado para TikTok
const TikTokIcon = (props: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.5 2h3.1c.2 2.1 1.6 3.7 3.4 3.9v3.1c-.9-.1-1.7-.3-2.5-.6v7.7c0 3.2-2.2 5.1-5.1 5.1-2.6 0-4.7-2-4.7-4.7 0-2.6 2-4.7 4.7-4.7.2 0 .4 0 .6.1v3.2c-.2-.1-.4-.1-.6-.1-1.1 0-2 .9-2 2 0 1.1.9 2 2 2 1.2 0 2.1-.8 2.1-2.2V2z" />
  </svg>
);

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        background: '#1f301d',
        color: '#e9e6e1',
        py: 4,
        px: 2,
        mt: 8,
        textAlign: 'center',
      }}
    >
      {/* Seção de emergência e crise */}
      <Box sx={{ mb: 4, textAlign: 'left', maxWidth: 700, mx: 'auto' }}>
        <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700, letterSpacing: 1, mb: 1 }}>
          INFORMAÇÕES DE EMERGÊNCIA E CRISE
        </Typography>
        <Typography sx={{ color: '#fff', mb: 1 }}>
          Se você ou alguém que você conhece estiver passando por uma emergência ou crise e precisar de ajuda imediata, ligue para o 911 ou vá ao pronto-socorro mais próximo.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
          <IconButton href="https://www.instagram.com/psicocrishendler/" target="_blank" rel="noopener" sx={{ color: '#fff' }} aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://facebook.com/" target="_blank" rel="noopener" sx={{ color: '#fff' }} aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/cristian-hendler-48983152/" target="_blank" rel="noopener" sx={{ color: '#fff' }} aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://wa.me/5551996024420" target="_blank" rel="noopener" sx={{ color: '#fff' }} aria-label="WhatsApp">
            <WhatsAppIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#e9e6e1' }}>
        Psicólogo Cristian Hendler &nbsp;|&nbsp; CRP 07/42111
      </Typography>
      <Box sx={{ mt: 1, mb: 2 }}>
        <Link href="#home" color="#e9e6e1" underline="hover" sx={{ mx: 1, fontWeight: 500, background: 'none', backgroundColor: 'transparent' }}>Início</Link>
        <Link href="#about" color="#e9e6e1" underline="hover" sx={{ mx: 1, fontWeight: 500, background: 'none', backgroundColor: 'transparent' }}>Sobre</Link>
        <Link href="#services" color="#e9e6e1" underline="hover" sx={{ mx: 1, fontWeight: 500, background: 'none', backgroundColor: 'transparent' }}>Serviços</Link>
        <Link href="#contact" color="#e9e6e1" underline="hover" sx={{ mx: 1, fontWeight: 500, background: 'none', backgroundColor: 'transparent' }}>Contato</Link>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Typography variant="body2" sx={{ color: '#e9e6e1', opacity: 0.85, fontWeight: 500, background: 'none', backgroundColor: 'transparent' }}>
          by Vanessa Rocha
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <IconButton
          href="https://www.instagram.com/psicocrishendler/"
          target="_blank"
          rel="noopener"
          sx={{ color: '#e9e6e1', mx: 1, '&:hover': { color: '#25D366' } }}
          aria-label="Instagram"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://wa.me/5551996024420"
          target="_blank"
          rel="noopener"
          sx={{ color: '#e9e6e1', mx: 1, '&:hover': { color: '#25D366' } }}
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ color: '#e9e6e1', opacity: 0.8 }}>
        © 2025 Cristian Hendler. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}

export default Footer; 