import React, { useState } from "react";
import { Button, Card, Container, Alert } from "react-bootstrap";

const ListaPacientesC = () => {
  const [pacientes, setPacientes] = useState([
    { nombre: "Juan Pérez" },
    { nombre: "Ana Gómez" },
    { nombre: "Luis Rodríguez" },
    { nombre: "Marta López" },
  ]);
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");

  const agregarPaciente = () => {
    if (nombre.trim() === "") {
      setError("El nombre no puede estar vacío.");
      return;
    }

    setPacientes([...pacientes, { nombre }]);
    setNombre(""); 
    setError(""); 
  };

  const eliminarPaciente = (index) => {
    const nuevosPacientes = pacientes.filter((_, i) => i !== index);
    setPacientes(nuevosPacientes);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        style={{
          padding: "1rem",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <h3 className="text-center mb-4">Lista de Pacientes</h3>

        {error && <Alert variant="danger">{error}</Alert>}

        
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del paciente"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <Button onClick={agregarPaciente} className="w-100" variant="primary">
          Agregar Paciente
        </Button>

        <h4 className="mt-4">Pacientes Registrados</h4>
        <ul className="list-group">
          {pacientes.map((paciente, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {paciente.nombre}
              <Button
                variant="danger"
                size="sm"
                onClick={() => eliminarPaciente(index)}
              >
                Eliminar
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  );
};

export default ListaPacientesC;
