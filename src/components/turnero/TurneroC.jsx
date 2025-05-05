import React, { useState } from "react";
import "./Turnero.css";

const TurneroC = ({ pacientes, setPacientes }) => {
 
    
  const [turnos, setTurnos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [doctor, setDoctor] = useState("");
  const [motivo, setMotivo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const profesionales = [
    "Dra. Valentia Ríos - Fisioterapia Deportiva",
    "Dr. Esteban Morales - Fisioterapia Neurológica",
    "Dra. Camila Herrera - Fisioterapia Ortopédica",
    "Dr. Rodrigo Santos - Rehabilitación Cardiopulmonar",
    "Dra. Laura Fernández – Fisioterapia Pediátrica",
  ];

   const agregarTurno = () => {
    // Después de agregar el turno, agregar al paciente a la lista
    setPacientes([...pacientes, { nombre }]);

  
     if (
       nombre.trim() !== "" &&
       dni.trim() !== "" &&
       doctor !== "" &&
       motivo.trim() !== "" &&
       fecha &&
       hora
     ) {
       // Aquí debes usar "nombre" y no "nombrePaciente"
       setTurnos([...turnos, { nombre, dni, doctor, motivo, fecha, hora }]);

       setNombre(""); // Limpiar campos
       setDni("");
       setDoctor("");
       setMotivo("");
       setFecha("");
       setHora("");
     } else {
       alert("Por favor completá todos los campos.");
     }
  };

  return (
    <div className="turnero-container">
      <h2>Turnos</h2>

      <div className="form-group">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre completo"
          className="form-control"
          minLength={85}
        />
      </div>

      <div className="form-group">
        <input
          type="number"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          placeholder="Número de Documento"
          className="form-control"
          maxLength={8}
        />
      </div>

      <div className="form-group">
        <select
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          className="form-control"
        >
          <option value="">Seleccionar Profesional</option>
          {profesionales.map((doc, index) => (
            <option key={index} value={doc}>
              {doc}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <textarea
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          placeholder="Motivo de consulta"
          className="form-control"
          rows="2"
          maxLength={1000}
        />
      </div>

      <div className="form-group">
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          className="form-control"
        />
      </div>

      <button onClick={agregarTurno} className="btn btn-primary">
        Agregar Turno
      </button>

      <h3>Lista de turnos:</h3>
      <ul className="turnos-lista">
        {turnos.map((t, i) => (
          <li key={i} className="turno-item">
            <strong>{t.nombre}</strong> (DNI: {t.dni})<br />
            <strong>Doctor:</strong> {t.doctor}
            <br />
            <strong>Motivo:</strong> {t.motivo}
            <br />
            <strong>Fecha:</strong> {t.fecha} - <strong>Hora:</strong> {t.hora}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TurneroC;
