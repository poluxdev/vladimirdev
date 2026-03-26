import React from 'react';
import './Projects.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ReactGA from 'react-ga4'; 

const Projects = () => {
  const projects = [
    {
      title: 'Personalidad & Tarot v2.0',
      description: 'Calcula tu vibración y esencia a través de los arcanos mayores para entender tu momento actual.',
      link: 'https://poluxdev.github.io/tarot-app'
    },
    {
      title: 'Vibración de tu Nombre',
      description: 'Descubre los secretos ocultos en las letras de tu nombre mediante el alfabeto pitagórico.',
      link: 'https://poluxdev.github.io/parejas/'
    },
    {
      title: 'Esencia de Nacimiento',
      description: 'Tu fecha de nacimiento guarda pistas sagradas sobre tu misión en esta encarnación.',
      link: 'https://poluxdev.github.io/nacimiento/'
    },
    {
      title: 'El Secreto del Celular',
      description: '¿Tu número te escogió a ti? Analiza la causalidad numerológica de tu contacto digital.',
      link: 'https://poluxdev.github.io/celularcausalidad/'
    },
    {
      title: 'Espejo Astral',
      description: 'Interfaz rápida para comprender la influencia de tu Ascendente, Sol y Luna.',
      link: 'https://poluxdev.github.io/zodiac/'
    },
    {
      title: 'Talento de Encarnación',
      description: 'Descubre las facultades naturales que trae la vibración de tu año de nacimiento.',
      link: 'https://poluxdev.github.io/chekyourtalents/'
    },
    {
      title: 'Karma del Mes',
      description: 'Identifica los aprendizajes y obstáculos evolutivos asociados a tu mes de nacimiento.',
      link: 'https://poluxdev.github.io/numerodekarma/'
    },
    {
      title: 'Propósito del Ser',
      description: 'El día en que naciste marca la dirección de tu alma. Encuentra tu propósito aquí.',
      link: 'https://poluxdev.github.io/numerodelproposito/'
    },
    {
      title: 'Nodos Lunares',
      description: 'Explora tu camino evolutivo y la dirección que tu alma busca en esta vida.',
      link: 'https://poluxdev.github.io/nodoslunares'
    },
    {
      title: 'Lilith: La Luna Negra',
      description: 'Comprende tu lado instintivo y lo que Lilith revela en tu carta natal.',
      link: 'https://poluxdev.github.io/lilith-calculator/'
    },
    {
      title: 'Nostalgia Retro',
      description: 'Un momento de recreación con el clásico Snake para despejar la mente.',
      link: 'https://poluxdev.github.io/snake/'
    }
  ];

  // Función para rastrear clics
  const handleProjectClick = (projectTitle) => {
    ReactGA.event({
      category: 'Proyectos',
      action: 'Exploración Herramienta',
      label: projectTitle,
    });
  };

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="display-4">Polux Herramientas</h2>
          <p className="subtitle-mistic">
            Explora estos oráculos digitales diseñados para tu autodescubrimiento.
          </p>
          <div className="separator"></div>
        </div>

        <Row>
          {projects.map((project, index) => (
            <Col key={index} lg={4} md={6} className="mb-4 d-flex">
              <Card className="project-card flex-fill">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-4">
                    <Card.Title className="project-title">{project.title}</Card.Title>
                    <Card.Text className="project-text">
                      {project.description}
                    </Card.Text>
                  </div>
                  
                  <div className="mt-auto">
                    <Button
                      variant="outline-light"
                      className="btn-project-link w-100"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleProjectClick(project.title)}
                    >
                      Abrir Herramienta
                    </Button>
                  </div>
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