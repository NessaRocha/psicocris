import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CurvedSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: '#f5f5f5',
  padding: '80px 0 40px 0',
  overflow: 'hidden',
}));

const Curve = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 80,
  background: 'none',
  zIndex: 1,
  pointerEvents: 'none',
});

const Content = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  maxWidth: 1200,
  margin: '0 auto',
  padding: theme.spacing(0, 2),
}));

const InstagramFeed: React.FC = () => {
  return (
    <CurvedSection>
      <Curve>
        <svg viewBox="0 0 1440 80" width="100%" height="80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,80 C480,0 960,160 1440,80 L1440,0 L0,0 Z" fill="#e9e6e1" />
        </svg>
      </Curve>
      <Content>
        <Typography variant="h3" align="center" gutterBottom sx={{ color: '#6d5c42', fontWeight: 700, mb: 6 }}>
          Minhas publicações
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {/* Widget oficial do Instagram */}
          <iframe
            src="https://www.instagram.com/embed.js"
            title="Instagram Feed"
            width="340"
            height="500"
            style={{ border: 'none', overflow: 'hidden', background: 'transparent' }}
            scrolling="no"
            allowTransparency={true}
            allow="encrypted-media"
          ></iframe>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <a
            href="https://www.instagram.com/psicocrishendler/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#25D366', fontWeight: 600, textDecoration: 'none', fontSize: 18 }}
          >
            Siga no Instagram @psicocrishendler
          </a>
        </Box>
      </Content>
    </CurvedSection>
  );
};

export default InstagramFeed; 