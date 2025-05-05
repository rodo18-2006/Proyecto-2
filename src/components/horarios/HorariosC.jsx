 import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./Horarios.css"
import { Link } from "react-router-dom";


const HorariosC = () => {
  const profesionales = [
   
    {
      nombre: "  Dra. Valentia Ríos",
      especialidad: " Fisioterapia Deportiva",
      dias: "Lunes, Miércoles y Viernes",
      horario: "08:00 a 12:00 hs",
    },

    {
      nombre: " Dra. Camila Herrera",
      especialidad: "Fisioterapia Ortopédica",
      dias: "Lunes a Viernes",
      horario: "09:00 a 13:00 hs",
    },

    {
      nombre: " Dr. Esteban Morales",
      especialidad: "Fisioterapia Neurológica",
      dias: "Martes y Jueves",
      horario: "14:00 a 18:00 hs",
    },
    {
      nombre: " Dr. Rodrigo Santos",
      especialidad: "Rehabilitación Cardiopulmonar",
      dias: "Martes y Jueves",
      horario: "08:00 a 12:00 hs",
    },

    {
      nombre: " Dra. Laura Fernández",
      especialidad: "Fisioterapia Pediátrica",
      dias: "Martes y Jueves",
      horario: "08:00 a 12:00 hs",
    },
  ];

  return (
    <Container className="doctores mt-5">
      <h2 className="text-center mb-4">Cartelera de Profesionales</h2>
      <Row>
        {profesionales.map((doctor, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card
              className="hora"
              style={{ boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}
            >
              <Card.Body>
                <Card.Title>{doctor.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {doctor.especialidad}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Días de Atención:</strong> {doctor.dias} <br />
                  <strong>Horario:</strong> {doctor.horario}
                </Card.Text>
                <Link to="/Turnos" className="btn btn-primary">
                  Solicitar Turno
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HorariosC;
