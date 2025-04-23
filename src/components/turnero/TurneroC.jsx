/* import React, { useState } from "react";
import "./Turnero.css"; 

const TurneroC = () => {
  const [turnos, setTurnos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [turnoActual, setTurnoActual] = useState(0);

  const agregarTurno = () => {
    if (nombre.trim() !== "") {
      setTurnos([...turnos, nombre]);
      setNombre("");
    }
  };

  const siguienteTurno = () => {
    if (turnoActual < turnos.length - 1) {
      setTurnoActual(turnoActual + 1);
    }
  };

  return (
    <div className="turnero-container">
      <h2 className="titulo">Turnos</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribí tu nombre"
        className="input-turno"
      />
      <button onClick={agregarTurno} className="btn-agregar">
        Agregar
      </button>

      <h3 className="turno-actual">
        Turno actual: {turnos[turnoActual] || "Nadie aún"}
      </h3>

      <button onClick={siguienteTurno} className="btn-siguiente">
        Siguiente
      </button>

      <ul className="lista-turnos">
        {turnos.map((t, i) => (
          <li key={i} className="turno-item">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TurneroC; */  

/* Segundo turnero */

 import React, { useState } from "react";
import "./Turnero.css";


const TurneroC = () => {
  const [turnos, setTurnos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const agregarTurno = () => {
    if (nombre.trim() !== "" && fecha && hora) {
      setTurnos([...turnos, { nombre, fecha, hora }]);
      setNombre("");
      setFecha("");
      setHora("");
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
          placeholder="Escribe tu nombre"
          className="form-control"
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

      <button onClick={agregarTurno} className="btn-agregar">
        Agregar Turno
      </button>

      <h3>Lista de turnos:</h3>
      <ul className="turnos-lista">
        {turnos.map((t, i) => (
          <li key={i} className="turno-item">
            {t.nombre} - {t.fecha} - {t.hora}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TurneroC;
  