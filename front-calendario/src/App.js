import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Corrigido o import
import CalendarioEventos from './Componentes/calendario/CalendarioEventos';
import Home from './Componentes/Home/Home';

function App() {
  return (
    <Router>   
      <Routes>   
      <Route path="/" element={<Home />} />  
        <Route path="/CalendarioEventos" element={<CalendarioEventos />} />  
      </Routes>
    </Router>   
  );
}

export default App;
