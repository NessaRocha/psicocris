const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User');
const mailer = require('../utils/mailer');

// Gerar token JWT
const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

// Registrar novo usuário
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: 'admin',
    });

    user.password = undefined;

    return res.json({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (err) {
    return res.status(400).json({ error: 'Falha no registro' });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: 'Senha inválida' });
    }

    user.password = undefined;

    return res.json({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (err) {
    return res.status(400).json({ error: 'Falha no login' });
  }
};

// Esqueci minha senha
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const token = crypto.randomBytes(20).toString('hex');
    const now = new Date();
    now.setHours(now.getHours() + 1);

    await User.update(
      {
        passwordResetToken: token,
        passwordResetExpires: now,
      },
      { where: { id: user.id } }
    );

    await mailer.sendMail({
      to: email,
      subject: 'Recuperação de Senha',
      template: 'forgot_password',
      context: { token },
    });

    return res.json({ message: 'E-mail de recuperação enviado' });
  } catch (err) {
    return res.status(400).json({ error: 'Erro ao enviar e-mail de recuperação' });
  }
};

// Redefinir senha
exports.resetPassword = async (req, res) => {
  try {
    const { email, token, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    if (token !== user.passwordResetToken) {
      return res.status(400).json({ error: 'Token inválido' });
    }

    const now = new Date();

    if (now > user.passwordResetExpires) {
      return res.status(400).json({ error: 'Token expirado' });
    }

    user.password = password;
    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    await user.save();

    return res.json({ message: 'Senha alterada com sucesso' });
  } catch (err) {
    return res.status(400).json({ error: 'Erro ao redefinir senha' });
  }
}; 