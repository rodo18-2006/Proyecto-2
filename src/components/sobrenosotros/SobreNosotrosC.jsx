import { Container, Row, Col, Card } from "react-bootstrap";
import "./SobreNosotros.css";


const SobreNosotrosC = () => {
  const cardsData = [
    {
      title: "Leonel Salvatierra",
      text: "Leonel tiene 19 años y descubrió la programación mientras exploraba nuevas áreas de interés. Lleva 6 meses estudiando y se ha propuesto avanzar cada vez más en sus conocimientos. Su cumpleaños es el 17 de diciembre. Además de programar, se dedica a la música, con pasión por poner música y crear buenas vibras.",
      image:
        "./img/foto-leo-salvatierra-programacion.jpg",
    },
    {
      title: "Iganacio Teseira",
      text: "Ignacio es un joven entusiasta de 15 años que comenzó a estudiar programación hace 6 meses. Desde entonces, quiere seguir aprendiendo y crecer en el mundo del desarrollo. Su cumpleaños es el 22 de junio y, además de programar, disfruta tocar la batería, su hobby favorito.",
      image:
        "./img/Foto-Nacho-programacion.jpg",
    },
  ];

  return (
    <>
      <div className="cards-wrapper">
      <Container>
        <Row className="justify-content-center">
          {cardsData.slice(0, 2).map((card, index) => (
            <Col xs={12} sm={6} md={4} className="mb-4" key={index}>
              <Card className="h-100">
                <Card.Img variant="top" src={card.image} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

<div className="historia">
  <h2>Nuestra Historia</h2>
    <p>
    Fisio Salud nació en 2010 con el objetivo de brindar soluciones de fisioterapia a
    la comunidad. Desde entonces, nos hemos dedicado a mejorar la calidad de vida de
    nuestros pacientes, utilizando técnicas de vanguardia y un equipo comprometido.
   </p>
 </div>

    </>
  );
};

export default SobreNosotrosC;
