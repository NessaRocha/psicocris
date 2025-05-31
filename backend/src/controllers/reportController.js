const Report = require('../models/Report');

exports.getAll = async (req, res) => {
  try {
    const { patientId } = req.query;
    const reports = await Report.findAll({ where: { patientId } });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar pareceres' });
  }
};

exports.create = async (req, res) => {
  try {
    const { patientId, content, createdAt } = req.body;
    const report = await Report.create({ patientId, content, createdAt });
    res.status(201).json(report);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar parecer' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const report = await Report.findByPk(id);
    if (!report) return res.status(404).json({ error: 'Parecer não encontrado' });
    await report.update({ content });
    res.json(report);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao atualizar parecer' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findByPk(id);
    if (!report) return res.status(404).json({ error: 'Parecer não encontrado' });
    await report.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Erro ao deletar parecer' });
  }
}; 