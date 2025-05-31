import React, { useState, useEffect } from 'react';
import { Patient, Report } from '../../types';
import CryptoJS from 'crypto-js';
import axios from 'axios';

interface ReportFormProps {
  patient: Patient;
  onClose: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({ patient, onClose }) => {
  const [content, setContent] = useState('');
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showDecryptInput, setShowDecryptInput] = useState<string | null>(null);
  const [decryptPassword, setDecryptPassword] = useState('');
  const [showDecrypted, setShowDecrypted] = useState<{ [id: string]: string }>({});
  const [editingReportId, setEditingReportId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [actionPassword, setActionPassword] = useState('');
  const [actionType, setActionType] = useState<'edit' | 'delete' | null>(null);
  const [actionReport, setActionReport] = useState<Report | null>(null);
  const [actionError, setActionError] = useState('');
  const [decryptingReportId, setDecryptingReportId] = useState<string | null>(null);
  const [decryptError, setDecryptError] = useState('');

  const today = new Date().toLocaleString();

  useEffect(() => {
    // Buscar pareceres do paciente
    setLoading(true);
    axios.get(`http://localhost:3001/api/reports?patientId=${patient.id}`)
      .then(res => setReports(res.data))
      .catch(() => setReports([]))
      .finally(() => setLoading(false));
  }, [patient.id]);

  const handleSave = async () => {
    setError('');
    setSuccess('');
    if (!content) {
      setError('O campo de parecer não pode estar vazio.');
      return;
    }
    try {
      const encryptedContent = CryptoJS.AES.encrypt(content, patient.phone).toString();
      await axios.post('http://localhost:3001/api/reports', {
        patientId: patient.id,
        content: encryptedContent,
        createdAt: new Date().toISOString(),
      });
      setSuccess('Parecer salvo com sucesso!');
      setContent('');
      // Atualiza lista
      const res = await axios.get(`http://localhost:3001/api/reports?patientId=${patient.id}`);
      setReports(res.data);
    } catch (err) {
      setError('Erro ao salvar parecer.');
    }
  };

  const handleDecrypt = (report: Report) => {
    setDecryptingReportId(report.id);
    setDecryptPassword('');
    setDecryptError('');
  };

  const handleConfirmDecrypt = (report: Report) => {
    try {
      const bytes = CryptoJS.AES.decrypt(report.content, decryptPassword);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      if (!decrypted) {
        setShowDecrypted(prev => ({ ...prev, [report.id]: 'Senha incorreta ou conteúdo inválido.' }));
        setDecryptError('Senha incorreta ou conteúdo inválido.');
      } else {
        setShowDecrypted(prev => ({ ...prev, [report.id]: decrypted }));
        setDecryptingReportId(null);
        setDecryptPassword('');
        setDecryptError('');
      }
    } catch {
      setShowDecrypted(prev => ({ ...prev, [report.id]: 'Erro ao descriptografar' }));
      setDecryptError('Erro ao descriptografar.');
    }
  };

  const handleEdit = (report: Report) => {
    setActionType('edit');
    setActionReport(report);
    setActionPassword('');
    setActionError('');
  };

  const handleDelete = (report: Report) => {
    setActionType('delete');
    setActionReport(report);
    setActionPassword('');
    setActionError('');
  };

  const handleConfirmAction = () => {
    if (!actionReport) return;
    // Verifica senha
    if (actionPassword !== patient.phone) {
      setActionError('Senha incorreta.');
      return;
    }
    if (actionType === 'edit') {
      // Descriptografa para edição
      const bytes = CryptoJS.AES.decrypt(actionReport.content, patient.phone);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      setEditingReportId(actionReport.id);
      setEditContent(decrypted);
      setActionType(null);
      setActionReport(null);
      setActionPassword('');
      setActionError('');
    } else if (actionType === 'delete') {
      doDelete(actionReport);
      setActionType(null);
      setActionReport(null);
      setActionPassword('');
      setActionError('');
    }
  };

  const doDelete = async (report: Report) => {
    if (!window.confirm('Tem certeza que deseja excluir este parecer?')) return;
    setDeleteLoading(report.id);
    try {
      await axios.delete(`http://localhost:3001/api/reports/${report.id}`);
      // Atualiza lista
      const res = await axios.get(`http://localhost:3001/api/reports?patientId=${patient.id}`);
      setReports(res.data);
      setShowDecrypted({});
    } catch {
      alert('Erro ao excluir parecer.');
    }
    setDeleteLoading(null);
  };

  const handleSaveEdit = async (report: Report) => {
    try {
      const encryptedContent = CryptoJS.AES.encrypt(editContent, patient.phone).toString();
      await axios.put(`http://localhost:3001/api/reports/${report.id}`, { content: encryptedContent });
      setEditingReportId(null);
      setEditContent('');
      // Atualiza lista
      const res = await axios.get(`http://localhost:3001/api/reports?patientId=${patient.id}`);
      setReports(res.data);
      setShowDecrypted({});
    } catch {
      alert('Erro ao salvar edição do parecer.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl relative">
        <div className="flex justify-between items-center mb-2">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl mr-2">✕</button>
          <button onClick={onClose} className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 text-sm">Voltar ao Painel</button>
        </div>
        <h2 className="text-2xl font-bold mb-2">Novo Parecer</h2>
        <div className="mb-2 text-sm text-gray-600">Data: {today}</div>
        <div className="mb-2 text-sm text-gray-600">Paciente: {patient.name}</div>
        <textarea
          className="w-full border rounded p-2 mb-2"
          rows={5}
          placeholder="Digite o parecer do paciente..."
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        {error && <div className="mb-2 text-red-500">{error}</div>}
        {success && <div className="mb-2 text-green-600">{success}</div>}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Salvar Parecer
          </button>
        </div>
        <h3 className="text-xl font-bold mb-2">Pareceres do Paciente</h3>
        {loading ? <div>Carregando...</div> : (
          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {reports.map(report => (
              <li key={report.id} className="border rounded p-2 bg-gray-50">
                <div className="text-xs text-gray-500 mb-1">Data: {new Date(report.createdAt).toLocaleString()}</div>
                <div className="flex gap-2 mb-1">
                  <button
                    onClick={() => handleDecrypt(report)}
                    className="text-blue-600 underline text-sm"
                  >
                    Ver/Descriptografar
                  </button>
                  <button
                    onClick={() => handleEdit(report)}
                    className="text-yellow-600 underline text-sm"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(report)}
                    className="text-red-600 underline text-sm"
                    disabled={deleteLoading === report.id}
                  >
                    {deleteLoading === report.id ? 'Excluindo...' : 'Excluir'}
                  </button>
                </div>
                {decryptingReportId === report.id && (
                  <div className="mb-2 flex items-center gap-2">
                    <input
                      type="password"
                      placeholder="Digite a senha (telefone)"
                      value={decryptPassword}
                      onChange={e => setDecryptPassword(e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                    <button
                      onClick={() => handleConfirmDecrypt(report)}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      OK
                    </button>
                    {decryptError && <span className="text-red-500 text-xs ml-2">{decryptError}</span>}
                  </div>
                )}
                {editingReportId === report.id ? (
                  <div className="mb-2">
                    <textarea
                      className="w-full border rounded p-2 mb-2"
                      rows={3}
                      value={editContent}
                      onChange={e => setEditContent(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleSaveEdit(report)}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        Salvar
                      </button>
                      <button
                        onClick={() => { setEditingReportId(null); setEditContent(''); }}
                        className="bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap break-words text-gray-800">
                    {showDecrypted[report.id] ? showDecrypted[report.id] : <span className="italic text-gray-400">(Criptografado)</span>}
                  </div>
                )}
              </li>
            ))}
            {reports.length === 0 && <li className="text-gray-500">Nenhum parecer cadastrado.</li>}
          </ul>
        )}
      </div>
      {/* Modal de senha para editar/excluir */}
      {actionType && actionReport && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-xs">
            <h3 className="text-lg font-bold mb-2">{actionType === 'edit' ? 'Editar Parecer' : 'Excluir Parecer'}</h3>
            <input
              type="password"
              placeholder="Digite a senha (telefone)"
              value={actionPassword}
              onChange={e => setActionPassword(e.target.value)}
              className="border rounded px-2 py-1 w-full mb-2"
            />
            {actionError && <div className="text-red-500 text-sm mb-2">{actionError}</div>}
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => { setActionType(null); setActionReport(null); setActionPassword(''); setActionError(''); }}
                className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmAction}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportForm;
