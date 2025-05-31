const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
      return res.status(401).json({ error: 'Token erro' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).json({ error: 'Token mal formatado' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findByPk(decoded.id);

      if (!user) {
        return res.status(401).json({ error: 'Usuário não encontrado' });
      }

      req.userId = decoded.id;
      req.userRole = user.role;
      return next();
    } catch (err) {
      return res.status(401).json({ error: 'Token inválido' });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = authMiddleware; 