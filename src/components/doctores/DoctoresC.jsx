import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import "./Doctores.css"


const DoctoresC = () => {
  return (
    <>
      <Card className="card">
        <Card.Body>
          <Card.Title>Dra. Valentia Ríos - Fisioterapia Deportiva</Card.Title>
          <Card.Text>
            Con más de 8 años de experiencia acompañando a atletas de alto
            rendimiento, la Dra. Ríos emplea técnicas de liberación miofascial y
            entrenamiento funcional para optimizar la recuperación y prevenir
            lesiones. Su enfoque combina terapia manual, ejercicios
            propioceptivos y planes de rehabilitación adaptados al deporte de
            cada paciente.
          </Card.Text>
          <Button variant="success">Solicitar Turno</Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Body>
          <Card.Title>
            Dr. Esteban Morales - Fisioterapia Neurológica
          </Card.Title>
          <Card.Text>
            Especializado en rehabilitación post‐accidente cerebrovascular y
            enfermedades neurodegenerativas, el Dr. Morales utiliza el enfoque
            Bobath y la terapia de espejo para favorecer la plasticidad cerebral
            y la mejora motora. Trabaja en estrecha colaboración con neurólogos
            y terapeutas ocupacionales para diseñar programas integrales.
          </Card.Text>
          <Button variant="success">Solicitar Turno</Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Body>
          <Card.Title>Dra. Camila Herrera - Fisioterapia Ortopédica</Card.Title>
          <Card.Text>
            Experta en lesiones musculoesqueléticas y post‐quirúrgicas, la Dra.
            Herrera aplica técnicas de movilización articular, ejercicios de
            fortalecimiento y terapias con ultrasonido. Atiende casos de hombro
            congelado, tendinopatías y rehabilitación tras artroplastias,
            enfocándose siempre en la funcionalidad y el alivio del dolor.
          </Card.Text>
          <Button variant="success">Solicitar Turno</Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Body>
          <Card.Title>
            Dr. Rodrigo Santos - Rehabilitación Cardiopulmonar
          </Card.Title>
          <Card.Text>
            Con formación en fisiología del ejercicio y cuidados intensivos, el
            Dr. Santos lidera programas de rehabilitación para pacientes con
            EPOC, insuficiencia cardíaca y post‐cirugías torácicas. Incorpora
            ejercicio de resistencia, entrenamiento en cinta y técnicas de
            drenaje bronquial para mejorar la capacidad respiratoria y la
            tolerancia al esfuerzo.
          </Card.Text>
          <Button variant="success">Solicitar Turno</Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Body>
          <Card.Title>
            Dra. Laura Fernández – Fisioterapia Pediátrica
          </Card.Title>
          <Card.Text>
            Apasionada por el desarrollo infantil, la Dra. Fernández trabaja con
            bebés y niños que presentan retrasos motores, parálisis cerebral o
            escoliosis temprana. Emplea juegos terapéuticos, estimulación
            sensoriomotora y ejercicios lúdicos para promover hitos del
            desarrollo y mejorar la coordinación.
          </Card.Text>
          <Button variant="success">Solicitar Turno</Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Body>
          <Card.Title>Dr. Martín Castillo – Fisioterapia Geriátrica</Card.Title>
          <Card.Text>
            Dedicado al cuidado de la tercera edad, el Dr. Castillo diseña
            rutinas de ejercicio suave, hidroterapia y entrenamiento de
            equilibrio para prevenir caídas y mantener la autonomía. Su práctica
            incluye también manejo del dolor crónico articular y programas para
            mejorar la postura y la fuerza funcional.
          </Card.Text>
          <Button variant="success">Solicitar Turno</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default DoctoresC