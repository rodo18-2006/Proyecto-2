import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "./atencionalcliente.css";

const Atencion = () => {
  return (
    <Container className="atencion-container">
      <h2 className="bienvenida-titulo">Te damos la bienvenida</h2>
      <p className="bienvenida-descripcion">
        Respondemos tus dudas frecuentes sobre fisioterapia.
      </p>
      <Accordion defaultActiveKey="0" className="atencion-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. ¿Cuándo debería acudir a un fisioterapeuta?</Accordion.Header>
          <Accordion.Body>
            Deberías acudir a un fisioterapeuta si tienes dolor muscular o
            articular persistente, te estás recuperando de una cirugía, has
            sufrido una lesión deportiva, tienes problemas de movilidad o sufres
            de enfermedades neurológicas o crónicas como artritis, lumbalgia o
            tendinitis.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>2. ¿Necesito una receta médica para comenzar fisioterapia?</Accordion.Header>
          <Accordion.Body>
            No siempre es necesario. En muchos países puedes acudir directamente
            a un fisioterapeuta sin receta, aunque si tu seguro médico lo
            requiere, es posible que necesites una derivación médica para que
            cubra el tratamiento.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. ¿Cuántas sesiones voy a necesitar?</Accordion.Header>
          <Accordion.Body>
            Depende de tu diagnóstico, la gravedad de la condición y cómo responde tu cuerpo al tratamiento.
            En la primera consulta, el fisioterapeuta evaluará tu situación y podrá darte una estimación más precisa.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. ¿La fisioterapia duele?</Accordion.Header>
          <Accordion.Body>
            Algunos ejercicios o técnicas pueden causar molestias, especialmente si estás tratando una lesión reciente
            o hay mucha rigidez muscular. Sin embargo, el tratamiento nunca debe causar dolor intenso.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            5. ¿Qué debo llevar o cómo debo vestirme para una sesión de fisioterapia?
          </Accordion.Header>
          <Accordion.Body>
            Es recomendable usar ropa cómoda y deportiva que permita el movimiento, como joggers o leggings y camiseta.
            Si el tratamiento se enfoca en una zona específica (por ejemplo, rodilla u hombro), intenta que esté fácilmente accesible.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Atencion;
