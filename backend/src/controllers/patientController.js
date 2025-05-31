const Patient = require('../models/Patient');
const { Op } = require('sequelize');
const Invite = require('../models/Invite');

exports.getAll = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar pacientes' });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, email, phone, birthDate } = req.body;
    const existingPatient = await Patient.findOne({ where: { phone } });
    if (existingPatient) {
      return res.status(400).json({ error: 'Telefone já cadastrado' });
    }
    const patient = await Patient.create({ name, email, phone, birthDate });
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar paciente' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, birthDate } = req.body;
    const patient = await Patient.findByPk(id);
    if (!patient) return res.status(404).json({ error: 'Paciente não encontrado' });
    const existingPatient = await Patient.findOne({ where: { phone, id: { [Op.ne]: id } } });
    if (existingPatient) {
      return res.status(400).json({ error: 'Telefone já cadastrado' });
    }
    await patient.update({ name, email, phone, birthDate });
    res.json(patient);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao atualizar paciente' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findByPk(id);
    if (!patient) return res.status(404).json({ error: 'Paciente não encontrado' });
    await patient.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Erro ao deletar paciente' });
  }
};

exports.createPublic = async (req, res) => {
  try {
    const { name, email, phone, birthDate, token } = req.body;
    // Validação do token único
    const invite = await Invite.findOne({ where: { token, used: false } });
    if (!invite) {
      return res.status(403).json({ error: 'Token inválido ou já utilizado' });
    }
    // Validação do telefone: apenas números, DDD+9 dígitos
    if (!/^\d{11}$/.test(phone)) {
      return res.status(400).json({ error: 'Telefone deve conter DDD + 9 dígitos (apenas números)' });
    }
    // Verifica duplicidade de telefone
    const existingPatient = await Patient.findOne({ where: { phone } });
    if (existingPatient) {
      return res.status(400).json({ error: 'Telefone já cadastrado' });
    }
    // Cria paciente
    const patient = await Patient.create({ name, email, phone, birthDate });
    // Marca o convite como usado
    invite.used = true;
    await invite.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao cadastrar paciente' });
  }
}; 