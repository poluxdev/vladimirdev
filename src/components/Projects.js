import React from 'react';
import './Projects.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ReactGA from 'react-ga4'; // 👈 Importamos GA

const Projects = () => {
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
      title: 'El año en que naciste son los talentos que trae tu ser...',
      description: 'Descubre tus talentos con esta aplicación y conoce las cualidades que trae la vibración de tu año de nacimiento',
      link: 'https://poluxdev.github.io/chekyourtalents/'
    },
    {
      title: '¿Sabías que el mes en que naciste tiene una información valiosa, como el karma?',
      description: 'Conocer el karma asociado con tu mes de nacimiento puede ofrecerte una valiosa perspectiva sobre las áreas en las que podrías encontrar obstáculos y oportunidades.',
      link: 'https://poluxdev.github.io/numerodekarma/'
    },
    {
      title: '¿Sabías que el día en que naciste marca la dirección o propósito del ser?',
      description: 'Cada día de tu nacimiento tiene un significado único que puede revelar aspectos profundos sobre tu propósito en la vida.',
      link: 'https://poluxdev.github.io/numerodelproposito/'
    },
    {
      title: 'Nodos Lunares: El Camino Evolutivo del Alma',
      description: 'Comprender la influencia de los nodos lunares ofrece una poderosa herramienta de autoconocimiento y guía para alinearse con tu evolución.',
      link: 'https://poluxdev.github.io/nodoslunares'
    },
    {
      title: 'Lilith',
      description: 'Información de Lilith, la Luna Negra, y su significado en la carta natal.',
      link: 'https://poluxdev.github.io/lilith-calculator/'
    }
  ];

  // Función para rastrear clics en los botones
  const handleProjectClick = (projectTitle) => {
    ReactGA.event({
      category: 'Proyectos',
      action: 'Click en Ver Proyecto',
      label: projectTitle,
    });
  };

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Polux Herramientas</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleProjectClick(project.title)} // 👈 Aquí rastreamos
                  >
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
