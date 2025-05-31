const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const sequelize = require('./config/database');
const patientRoutes = require('./routes/patient');
const reportRoutes = require('./routes/report');
const inviteRoutes = require('./routes/invite');

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/public', patientRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/invites', inviteRoutes);

// Sincronizar banco de dados
sequelize.sync().then(() => {
  // Banco de dados sincronizado
}).catch(err => {
  console.error('Erro ao sincronizar banco de dados:', err);
});

module.exports = app; 