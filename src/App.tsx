import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import { Helmet } from 'react-helmet';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPanel from './components/AdminPanel';
import { SnackbarProvider } from './hooks/useSnackbar';
import PatientSelfRegister from './pages/PatientSelfRegister';

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
      <Helmet>
        <title>Cris Hendler Psicólogo (@crishendlerpsico) | Torres RS</title>
        <meta name="description" content="Cris Hendler Psicólogo (@crishendlerpsico) - Atendimento psicológico presencial e online em Torres RS. Especialista em terapia para adultos, adolescentes e crianças." />
        <meta name="keywords" content="crishendlerpsico, cris hendler psicologo, psicologo cris hendler, psicologo em torres rs, psicologo online torres, psicologo cris, psicologo torres rs, psicologo cristian hendler" />
        <link rel="canonical" href="https://crispsicologo.com.br/" />
      </Helmet>
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

// Componente para mostrar botão de login oculto
const HiddenLoginButton = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l') {
        setShow(true);
        setTimeout(() => setShow(false), 10000); // Esconde após 10s
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!show) return null;
  return (
    <button
      onClick={() => navigate('/admin')}
      className="fixed bottom-8 right-8 bg-gray-700 text-white px-4 py-2 rounded shadow-lg z-50"
      style={{ opacity: 0.85 }}
    >
      Login Admin
    </button>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <SnackbarProvider>
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
            <HiddenLoginButton />
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/terapia-para-adultos" element={<IndividualTherapy />} />
              <Route path="/terapia-adolescentes" element={<YouthTherapy />} />
              <Route path="/psicoterapia-infantil" element={<ChildTherapy />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              } />
              <Route path="/cadastro-paciente" element={<PatientSelfRegister />} />
            </Routes>
          </div>
        </Router>
        <CookieBanner />
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
export {};
 