import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Container,
  Card,
  Alert,
} from "react-bootstrap";

const FormC = () => {
  const [rol, setRol] = useState("medico");
  const [formData, setFormData] = useState({
    usuario: "",
    email: "",
    contraseña: "",
    repetir: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "contraseña" || e.target.name === "repetir") {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rol === "paciente" && formData.contraseña !== formData.repetir) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    console.log("Datos enviados:", formData);
    setError("");

    if (rol === "medico") {
      navigate("/Turnos");
    } else {
      navigate("/Inicio"); 
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        style={{
          padding: "1rem",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <h3 className="text-center mb-4">
          {rol === "medico" ? "Iniciar Sesión Médico" : "Registro Paciente"}
        </h3>

        <ToggleButtonGroup
          type="radio"
          name="rol"
          value={rol}
          onChange={(val) => setRol(val)}
          className="mb-3 w-100 justify-content-center"
        >
          <ToggleButton
            id="btn-medico"
            value="medico"
            variant="outline-primary"
          >
            Médico
          </ToggleButton>
          <ToggleButton
            id="btn-paciente"
            value="paciente"
            variant="outline-primary"
          >
            Paciente
          </ToggleButton>
        </ToggleButtonGroup>

        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresá tu usuario"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </Form.Group>

          {rol === "paciente" && (
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresá tu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresá tu contraseña"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
              autoComplete={
                rol === "medico" ? "current-password" : "new-password"
              }
            />
          </Form.Group>

          {rol === "paciente" && (
            <Form.Group className="mb-3">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repetí tu contraseña"
                name="repetir"
                value={formData.repetir}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
            </Form.Group>
          )}

          {error && <Alert variant="danger">{error}</Alert>}

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={
              rol === "paciente" && (!formData.contraseña || !formData.repetir)
            }
          >
            {rol === "medico" ? "Ingresar como Médico" : "Registrar Paciente"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default FormC;
