import React from 'react';
import './Projects.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  // LISTA de proyectos
  const projects = [
    {
      title: 'Calculadora De Personalidad Con Tarot v2.0',
      description: 'Una aplicacion sencilla para calcular tu vibra y la personalidad segun el tarot',
      link: 'https://poluxdev.github.io/tarot-app'
    },
    {
      title: 'Que Dicen Los Numeros De Tu Nombre',
      description: 'Calculadora del la vibracion de tu nombre con el alfabeto pitagorico.',
      link: 'https://poluxdev.github.io/parejas/'
    },
    {
      title: 'Calculadora Numerologica',
      description: 'Nacemos con un numero que nos puede dar pistas de nuestra escencia.',
      link: 'https://poluxdev.github.io/nacimiento/'
    },
    {
      title: 'Juego retro',
      description: 'Un juego nostalgico de la vieja escuela',
      link: 'https://poluxdev.github.io/snake/'
    },
    {
      title: 'El Secreto De Tu Numero Celular',
      description: '¿El numero de tu celular te escogio a ti o tu elegiste tu numero celular?',
      link: 'https://poluxdev.github.io/celularcausalidad/'
    },
    {

      title: 'Selecciona tus principales signos de tu carta astral y obtén información correspondiente',
      description: 'Una interfaz rápida y sencilla para ver la información de los principales signos de tu carta astral, como el ascendente, el signo solar y el signo lunar.',
      link: 'https://poluxdev.github.io/zodiac/'

    },
    {
      title: 'El año en que naciste son los talentos que trae tu ser aprovechalos al maximo es lo que llaman destino o suerte ',
      description: 'Descubre tus talentos con esta aplicación y conoce las cualidades que trae la vibración de tu año de nacimiento',
      link: 'https://poluxdev.github.io/chekyourtalents/'
    },
    {
      title: '¿Sabías que el mes en que naciste tiene una información valiosa, como el karma?',
      description: 'El karma, o la ley de causa y efecto, es una herramienta poderosa para comprender las deudas y desafíos que enfrentamos en la vida. Conocer el karma asociado con el mes en el que naciste puede ofrecerte una valiosa perspectiva sobre las áreas en las que podrías encontrar obstáculos y oportunidades. Esta comprensión te permitirá orientar tu desarrollo personal con mayor claridad y eficacia, transformando los desafíos en oportunidades para crecer y evolucionar.',
      link: 'https://poluxdev.github.io/numerodekarma/'
    },
    {
      title: '¿Sabías que el día en que naciste marca la dirección o propósito del ser?',
      description: 'Cada día de tu nacimiento tiene un significado único en la numerología, que puede revelar aspectos profundos sobre tu propósito en la vida. Conocer el número asociado con tu día de nacimiento te ofrece una perspectiva sobre tus talentos innatos, tus desafíos personales y tu camino hacia el autoconocimiento y el crecimiento. Al entender estos aspectos, puedes alinear tus esfuerzos y decisiones con tu propósito esencial, logrando así una vida más plena y significativa.',
      link: 'https://poluxdev.github.io/numerodelproposito/'
    },
    {
      title: 'Nodos Lunares: El Camino Evolutivo del Alma',
      description: 'En la astrología, los nodos lunares representan un mapa del camino evolutivo del alma a lo largo de las vidas. Estos puntos matemáticos, conocidos como el Nodo Norte y el Nodo Sur, marcan los desafíos y las lecciones que cada individuo está destinado a enfrentar y superar. El Nodo Sur refleja las tendencias, comportamientos y talentos que el alma ha dominado en vidas pasadas, pero que deben ser equilibrados y transformados en la vida actual. Por otro lado, el Nodo Norte señala el propósito de vida, los nuevos desafíos y las áreas de crecimiento que el alma debe abrazar para evolucionar. Cada persona tiene una combinación única de nodos lunares que influye profundamente en su desarrollo personal, sus relaciones y su sentido de dirección en la vida. Comprender la influencia de los nodos lunares ofrece una poderosa herramienta de autoconocimiento y guía para alinearse con el camino evolutivo del alma.',
      link: 'https://poluxdev.github.io/nodoslunares'
    },
    {
      title: 'Lilith',
      description: 'Aquí encontrarás información de Lilith, la Luna Negra, y su significado en la carta natal. La aplicación proporciona una interpretación detallada basada en la posición de Lilith y su influencia en la personalidad y el crecimiento personal.',
      link: 'https://poluxdev.github.io/lilith-calculator/'
    },
    
    // Agrega más proyectos 
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Mis Proyectos</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver Proyecto
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
