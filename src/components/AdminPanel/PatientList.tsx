import React from 'react';
import { Patient } from '../../types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';

interface PatientListProps {
  patients: Patient[];
  onSelectPatient: (patient: Patient) => void;
  onEditPatient: (patient: Patient) => void;
  onDeletePatient: (id: string) => void;
}

const PatientList: React.FC<PatientListProps> = ({ patients, onSelectPatient, onEditPatient, onDeletePatient }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Lista de Pacientes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b text-left">Nome</th>
              <th className="px-6 py-3 border-b text-left">Email</th>
              <th className="px-6 py-3 border-b text-left">Telefone</th>
              <th className="px-6 py-3 border-b text-left">Data de Nascimento</th>
              <th className="px-6 py-3 border-b text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b flex items-center gap-2">
                  <AssignmentIcon style={{ color: '#757575' }} />
                  <button
                    onClick={() => onSelectPatient(patient)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-1"
                  >
                    Parecer
                  </button>
                  {patient.name}
                </td>
                <td className="px-6 py-4 border-b">{patient.email}</td>
                <td className="px-6 py-4 border-b">{patient.phone}</td>
                <td className="px-6 py-4 border-b">{new Date(patient.birthDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 border-b flex gap-2">
                  <button onClick={() => onEditPatient(patient)} title="Editar">
                    <EditIcon style={{ color: '#1976d2' }} />
                  </button>
                  <button onClick={() => onDeletePatient(patient.id)} title="Excluir">
                    <DeleteIcon style={{ color: '#d32f2f' }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
