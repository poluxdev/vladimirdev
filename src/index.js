import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar CSS de Bootstrap
import './index.css'; // Importar tus estilos personalizados
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4'; // 👈 Importamos GA4

// 👇 Inicializamos Google Analytics
ReactGA.initialize('G-QTFVQ7PPG6');
ReactGA.send('pageview');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Opcional: medir el rendimiento
reportWebVitals();
