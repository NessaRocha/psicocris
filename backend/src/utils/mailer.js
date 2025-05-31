const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = {
  async sendMail({ to, subject, template, context }) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: `
        <h1>Recuperação de Senha</h1>
        <p>Você solicitou a recuperação de senha.</p>
        <p>Use o token abaixo para redefinir sua senha:</p>
        <h2>${context.token}</h2>
        <p>Este token expira em 1 hora.</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.error('Erro ao enviar e-mail:', err);
      throw new Error('Erro ao enviar e-mail');
    }
  },
}; 