import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import InstagramFeed from './components/InstagramFeed';
import WhatsAppButton from './components/WhatsAppButton';
import IndividualTherapy from './pages/IndividualTherapy';
import YouthTherapy from './pages/YouthTherapy';
import ChildTherapy from './pages/ChildTherapy';
import Footer from './components/Footer';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './App.css';
import CookieBanner from './components/CookieBanner';
import Contact from './components/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#566542' },
    secondary: { main: '#2E7D32' },
    background: { default: '#ffffff' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#B7C9A8' },
    secondary: { main: '#7a5430' },
    background: { default: '#1f301d', paper: '#1f301d' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
});

function Home({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Services />
        {/* <InstagramFeed /> */}
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        sx={{ position: 'fixed', top: 16, right: 16, zIndex: 3000 }}
        onClick={() => setDarkMode((prev) => !prev)}
        color="inherit"
        aria-label="Alternar modo escuro"
      >
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/individual-therapy" element={<IndividualTherapy />} />
            <Route path="/youth-therapy" element={<YouthTherapy />} />
            <Route path="/child-therapy" element={<ChildTherapy />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          </Routes>
        </div>
      </Router>
      <CookieBanner />
    </ThemeProvider>
  );
}

export default App;
export {};
 