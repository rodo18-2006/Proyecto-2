import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import "./Contacto.css"; 

const ContactoC = () => {
  return (
    <>

    <div className="contacto-wrapper">
      <div className="contacto-container">
        <h1>Contacto</h1>
        <p>
          Estamos aquí para ayudarte. Puedes comunicarte con nosotros a través del
          formulario o nuestros canales de atención.
        </p>
        <p><strong>Email:</strong> contacto@fisiosalud.com</p>
        <p><strong>Teléfono:</strong> +54 11 1234 5678</p>
      </div>
    </div>

 {/* inicio de Acordion */}
    <div className="accordion-wrapper">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Sitio Web</Accordion.Header>
          <Accordion.Body>
            www.fisiosalud.com.ar
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Atención Telefónica</Accordion.Header>
          <Accordion.Body>
          +54 11 1234 5678 (8 a 17 hs)
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Mesa de Ayuda</Accordion.Header>
          <Accordion.Body>
            0800-122-4777 op.2
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Teléfono para Emergencias</Accordion.Header>
          <Accordion.Body>
            381-955-8457
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Facebook</Accordion.Header>
          <Accordion.Body>
            www.facebook.com/FisioSalud
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Instagram</Accordion.Header>
          <Accordion.Body>
            www.instagram.com/FisioSalud
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>X</Accordion.Header>
          <Accordion.Body>
            www.twitter.com/FisioSalud
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>WhatsApp</Accordion.Header>
          <Accordion.Body>
            381-355-9651
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
 {/* fin de acordion*/}
</>
  );
}

export default ContactoC ;