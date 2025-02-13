import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import CalendarioEventos from './Componentes/calendario/CalendarioEventos';
import Home from './Componentes/Home/Home';
import { useState, useEffect } from 'react';

function App() {


  const [modoEscuro, setModoEscuro] = useState(false);

  useEffect(() => {
    if (modoEscuro) {
      document.body.className = 'escuro';
    } else {
      document.body.className = 'claro';
    }
  }, [modoEscuro]);


  return (
    <Router>   
      <div>
        <button className='botaoQueTrocarOTema' onClick={() => setModoEscuro(prevModo => !prevModo)}>
          Mudar para {modoEscuro ? 'claro' : 'escuro'}
        </button>
        <Routes>   
          <Route path="/" element={<Home />} />  
          <Route path="/CalendarioEventos" element={<CalendarioEventos />} />  
        </Routes>
      </div>
    </Router>   
  );
}

export default App;
