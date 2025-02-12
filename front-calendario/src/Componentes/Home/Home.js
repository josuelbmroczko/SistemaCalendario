import React from 'react';
import { Link } from 'react-router-dom'; // Importando Link do React Router para navegação
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Bem-vindo!</h1>
        <p>Essa é a nossa página de eventos. Fique à vontade para explorar!</p>
      </div>
      
      <div className="button-container">
        <Link to="/CalendarioEventos">
          <button className="btn-explore">Ir para Eventos</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
