import React, { useState, useEffect } from "react";
import PatientList from "./PatientList";
import PatientForm from "./PatientForm";
import ReportForm from "./ReportForm";
import { Patient } from "../../types";
import axios from 'axios';
import { useSnackbar } from '../../hooks/useSnackbar';
import authService from '../../services/authService';
import LogoutIcon from '@mui/icons-material/Logout';

const AdminPanel = () => {
  const [showPatientForm, setShowPatientForm] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);
  const [inviteLink, setInviteLink] = useState<string | null>(null);
  const { showMessage } = useSnackbar();

  useEffect(() => {
    axios.get('http://localhost:3001/api/patients')
      .then(res => setPatients(res.data))
      .catch(() => setPatients([]));
  }, []);

  const handleGenerateInvite = async () => {
    try {
      const res = await axios.post('http://localhost:3001/api/invites');
      const token = res.data.token;
      const link = `${window.location.origin}/cadastro-paciente?token=${token}`;
      setInviteLink(link);
      showMessage('Convite gerado com sucesso!', 'success');
    } catch {
      showMessage('Erro ao gerar convite', 'error');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Admin Panel</h1>
        <button
          onClick={() => { authService.logout(); window.location.href = '/'; }}
          className="text-gray-400 hover:text-red-500 p-2 rounded transition"
          title="Sair"
          aria-label="Sair"
        >
          <LogoutIcon fontSize="small" />
        </button>
      </div>
      <button onClick={() => { setShowPatientForm(true); setEditingPatient(null); }}>
        Add New Patient
      </button>
      <button onClick={handleGenerateInvite} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Gerar convite
      </button>
      {(showPatientForm || editingPatient) && (
        <PatientForm
          onClose={() => { setShowPatientForm(false); setEditingPatient(null); }}
          initialData={editingPatient || undefined}
          onSave={async (patient) => {
            try {
              if (editingPatient) {
                await axios.put(`http://localhost:3001/api/patients/${editingPatient.id}`, patient);
              } else {
                await axios.post('http://localhost:3001/api/patients', patient);
              }
              setShowPatientForm(false);
              setEditingPatient(null);
              // Atualiza a lista de pacientes
              const res = await axios.get('http://localhost:3001/api/patients');
              setPatients(res.data);
            } catch (err) {
              // TODO: Centralizar mensagem de erro
            }
          }}
        />
      )}
      {inviteLink && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <div className="mb-2 font-semibold">Link de convite para enviar ao paciente:</div>
          <div className="flex items-center gap-2 mb-2">
            <input type="text" value={inviteLink} readOnly className="w-full px-2 py-1 border rounded" />
            <button
              onClick={() => { navigator.clipboard.writeText(inviteLink); showMessage('Link copiado!', 'info'); }}
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
            >
              Copiar
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <a
              href="https://meet.google.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 text-xs"
              title="Criar reunião Google Meet"
            >
              Gerar Meet
            </a>
            <a
              href="https://zoom.us/start/videomeeting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 text-xs"
              title="Criar reunião Zoom"
            >
              Gerar Zoom
            </a>
          </div>
        </div>
      )}
      <PatientList
        patients={patients}
        onSelectPatient={(patient) => setSelectedPatient(patient)}
        onEditPatient={(patient) => {
          setEditingPatient(patient);
          setShowPatientForm(false);
        }}
        onDeletePatient={async (id) => {
          if (window.confirm('Tem certeza que deseja excluir este paciente?')) {
            try {
              await axios.delete(`http://localhost:3001/api/patients/${id}`);
              const res = await axios.get('http://localhost:3001/api/patients');
              setPatients(res.data);
            } catch (err) {
              // TODO: Centralizar mensagem de erro
            }
          }
        }}
      />
      {selectedPatient && (
        <ReportForm patient={selectedPatient} onClose={() => setSelectedPatient(null)} />
      )}
    </div>
  );
};

export default AdminPanel;

