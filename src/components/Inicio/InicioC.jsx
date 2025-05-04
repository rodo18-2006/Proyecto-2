import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import "./Inicio.css"


const InicioC = () => {

  /* Array de cards */
  const cardsData = [
    {
      title: 'Fisioterapia General',
      text: 'Tratamientos para mejorar la movilidad y reducir el dolor.',
      image: 'https://lh4.googleusercontent.com/proxy/OxhxFdIf7QD_Rt88vV_vRrKvthO6Sw8LaTMnMQZUeiaoa-FFWpJsZyZHqaDWM2PNN9Tq30YeiuZaNN1Flf1lRNT-hqImCX6w7mbetA',
      modalText: 'La fisioterapia general se centra en el tratamiento de condiciones musculo-esqueléticas comunes, como dolores crónicos, lesiones por accidentes, o enfermedades degenerativas. El objetivo es mejorar la movilidad, reducir el dolor y restaurar la función física de los pacientes. Utiliza técnicas como ejercicios terapéuticos, terapia manual y electroterapia.'
    },
    {
      title: 'Rehabilitación Deportiva',
      text: 'Atención especializada para lesiones deportivas.',
      image: 'https://fisiofix.pe/wp-content/uploads/2023/12/se.jpg',
      modalText: 'La rehabilitación deportiva es un tipo especializado de fisioterapia que ayuda a los atletas a recuperarse de lesiones, mejorando su rendimiento y evitando futuras complicaciones. En esta área, se trabajan las lesiones deportivas, como esguinces, fracturas o tendinitis, con un enfoque en recuperar la movilidad, fuerza y flexibilidad necesarias para el deporte.'
    },
    {
      title: 'Terapia Manual',
      text: 'Técnicas para liberar tensiones musculares.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvM2mV7L9viXQXVUOJTZjqOUzSYPATJlSJEA&s',
      modalText: 'La terapia manual es un enfoque de tratamiento en el que los fisioterapeutas utilizan sus manos para aliviar el dolor, mejorar la movilidad articular y muscular. Las técnicas incluyen manipulaciones, masajes y movilizaciones articulares, y se emplean para tratar dolores musculares, lesiones deportivas o condiciones relacionadas con los nervios.'
    },
    {
      title: 'Pediatría',
      text: 'Fisioterapia adaptada a niños.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMfIVomEMyAcbEVVGStLVtXL5iKB3jpWeHw&s',
      modalText: 'La fisioterapia pediátrica se enfoca en el tratamiento de los más pequeños, ayudando a tratar y prevenir problemas de desarrollo motor. Los fisioterapeutas pediátricos trabajan con niños que tienen desde problemas neurológicos hasta deformidades musculoesqueléticas.'
    },
    {
      title: 'Neurológica',
      text: 'Tratamientos para pacientes con afecciones neurológicas.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft-pCgCDOSJXVaymWREQsjNp5iWkt7Q0tEQ&s',
      modalText: 'La fisioterapia neurológica está destinada a personas con trastornos que afectan el sistema nervioso, como accidentes cerebrovasculares, esclerosis múltiple, Parkinson, entre otros. Su objetivo es mejorar la movilidad, la fuerza muscular y la coordinación.'
    },
    {
      title: 'Masajes Terapéuticos',
      text: 'Relajación y recuperación muscular.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGp1YCb_VB2L-KDMtSRh0x6xFdhD3btFYQmQ&s',
      modalText: 'Los masajes terapéuticos son una técnica comúnmente usada en fisioterapia para aliviar el dolor muscular, reducir la tensión y mejorar la circulación. Se utilizan varias técnicas como el masaje de tejidos profundos, el masaje sueco o el drenaje linfático.'
    }
  ];

  /* Estado para mostrar el modal */
  const [showModalIndex, setShowModalIndex] = useState(null);

  /* Función para abrir el modal */
  const handleShow = (index) => setShowModalIndex(index);

  /* Función para cerrar el modal */
  const handleClose = () => setShowModalIndex(null);

  /* Fin de array */

  return (
    <>
   {/* Inicio de Carrusel */}
<Carousel fade className="d-block w-100">
  <Carousel.Item className="Carrusel-item">
    <div  className="Carrusel" >
      <img
        src="https://cdn-eihdp.nitrocdn.com/aCyQxXaUDJIbZLWeSfEGQtLLseYOspcr/assets/images/optimized/rev-c71cf92/chghealth.com/wp-content/uploads/2022/11/Physical-Therapy-vs-Physiotherapy-1.jpg"
        alt="Primera imagen"
      />
    </div>
  </Carousel.Item>

  <Carousel.Item className="Carrusel-item" >
    <div  className="Carrusel" >
      <img
        src="https://cmuch.edu.mx/blogmty/wp-content/uploads/2023/05/La-fisioterapia-y-las-ciencias-de-la-salud.jpg"
        alt="Segunda imagen"
      />
    </div>
  </Carousel.Item>

  <Carousel.Item className="Carrusel-item" >
    <div className="Carrusel" >
      <img
        src="https://clinicarozalen.com/wp-content/uploads/2023/10/fisioterapia-madrid-1200x800.jpg"
        alt="Tercera imagen"
      />
    </div>
  </Carousel.Item>
</Carousel>
{/* Fin de Carrusel */}

  {/* boton subir */}
   <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="boton-subir"> 
    Subir
  </button>
 {/* fin del boton subir */}

  {/* Texto Extra */}
    <Container className="my-5">
        <h1 className="text-center mb-5">
          Bienvenido a nuestra clínica, aquí puedes encontrar la mejor atención.
        </h1>

 {/* Inicio de Cards */}
<Row>
  {cardsData.map((card, index) => (
    <Col xs={12} sm={6} md={4} className="mb-4" key={index}>
      <Card className="h-100">
        <Card.Img variant="top" src={card.image} className="Card-img" />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Button variant="primary" onClick={() => handleShow(index)} className="mt-3">Ver más</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row> 

 {/* Ventana Modal */}
 {showModalIndex !== null && (
          <Modal show onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>{cardsData[showModalIndex].title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{cardsData[showModalIndex].modalText}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        )}
    </Container>
    </>
  );
};


export default InicioC;
