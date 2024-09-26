import React, { useEffect } from 'react';
import './FallingStars.css'; // Asegúrate de crear este archivo CSS también

const FallingStars = () => {
  useEffect(() => {
    const fallingStars = document.querySelector('.falling-stars');

    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Posición inicial aleatoria
      const startX = Math.random() * window.innerWidth;
      star.style.left = `${startX}px`;
      star.style.top = '0px';

      // Duración y velocidad aleatoria
      const duration = Math.random() * 3 + 2; // Entre 2 y 5 segundos
      star.style.animationDuration = `${duration}s`;

      // Añade la estrella al DOM
      fallingStars.appendChild(star);

      // Elimina la estrella después de la animación
      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    };

    // Crea estrellas fugaces en intervalos
    const interval = setInterval(createStar, 500);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return <div className="falling-stars"></div>;
};

export default FallingStars;
