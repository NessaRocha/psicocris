const Invite = require('../models/Invite');
const crypto = require('crypto');

exports.create = async (req, res) => {
  try {
    const token = crypto.randomBytes(16).toString('hex');
    const invite = await Invite.create({ token });
    res.status(201).json(invite);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar convite' });
  }
};

exports.list = async (req, res) => {
  try {
    const invites = await Invite.findAll();
    res.json(invites);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao listar convites' });
  }
}; 