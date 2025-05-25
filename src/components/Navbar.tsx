import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { styled, useTheme } from '@mui/material/styles';
import logoCris from '../assets/logoCris.svg';

// Styled AppBar com prop interna $elevate
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#1f301d',
  boxShadow: theme.shadows[1],
  borderBottom: '1.5px solid #4a5737',
  transition: 'none',
  zIndex: 2000,
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: 'none',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#B7C9A8' : '#566542',
  margin: '0 10px',
  fontWeight: 500,
  letterSpacing: 1,
  borderBottom: '2.5px solid transparent',
  borderRadius: 0,
  backgroundColor: 'transparent',
  transition: 'background 0.2s, color 0.2s, border-bottom 0.2s',
  '&:hover': {
    backgroundColor: 'rgba(86,101,66,0.10)',
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
  },
}));

const Logo = styled('img')({
  height: 64,
  marginRight: 40,
  marginLeft: 24,
});

const SocialIcons = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginLeft: 16,
});

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contato' },
];

// Adicionar tipagem explícita para as props da Navbar
interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// Função utilitária para garantir scroll ao topo
function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  if (document.documentElement) document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  if (document.body) document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <StyledAppBar position="fixed" elevation={0}>
      <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <picture>
            <source srcSet={require('../assets/logoCris.webp')} type="image/webp" />
            <img src={logoCris} alt="Logo PsicoCris" width={64} height={64} />
          </picture>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {/* Menu Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {navLinks.map((item) => (
            item.label === 'Início' ? (
              <NavButton
                key={item.label}
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
              >
                {item.label}
              </NavButton>
            ) : (
              <NavButton key={item.href} href={item.href}>{item.label}</NavButton>
            )
          ))}
          <SocialIcons>
            <a
              href="https://www.instagram.com/psicocrishendler/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', fontSize: 26, transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = '#25D366')}
              onMouseOut={e => (e.currentTarget.style.color = '#fff')}
              aria-label="Instagram"
            >
              <InstagramIcon fontSize="inherit" />
            </a>
            <a
              href="https://wa.me/5551996024420"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', fontSize: 26, transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = '#25D366')}
              onMouseOut={e => (e.currentTarget.style.color = '#fff')}
              aria-label="WhatsApp"
            >
              <WhatsAppIcon fontSize="inherit" />
            </a>
            <IconButton
              onClick={() => setDarkMode((prev: boolean) => !prev)}
              color="inherit"
              aria-label="Alternar modo escuro"
              sx={{ ml: 1 }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </SocialIcons>
        </Box>
        {/* Menu Mobile */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton
            onClick={() => setDarkMode((prev: boolean) => !prev)}
            color="inherit"
            aria-label="Alternar modo escuro"
            sx={{ mr: 1 }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{ sx: { backgroundColor: '#566542', color: 'white', zIndex: 3001 } }}
          >
            <Box sx={{ width: 220, p: 2 }}>
              <List>
                {navLinks.map((item) => (
                  <ListItem key={item.href} disablePadding>
                    {item.label === 'Início' ? (
                      <ListItemButton
                        onClick={() => {
                          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                          setDrawerOpen(false);
                        }}
                      >
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    ) : (
                      <ListItemButton component="a" href={item.href} onClick={() => setDrawerOpen(false)}>
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    )}
                  </ListItem>
                ))}
                <ListItem>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <a
                      href="https://www.instagram.com/psicocrishendler/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#fff', fontSize: 26, transition: 'color 0.2s' }}
                      onMouseOver={e => (e.currentTarget.style.color = '#25D366')}
                      onMouseOut={e => (e.currentTarget.style.color = '#fff')}
                      aria-label="Instagram"
                    >
                      <InstagramIcon fontSize="inherit" />
                    </a>
                    <a
                      href="https://wa.me/5551996024420"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#fff', fontSize: 26, transition: 'color 0.2s' }}
                      onMouseOver={e => (e.currentTarget.style.color = '#25D366')}
                      onMouseOut={e => (e.currentTarget.style.color = '#fff')}
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon fontSize="inherit" />
                    </a>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 