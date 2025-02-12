import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarioEventos.css';

const CalendarioEventos = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [horario, setHorario] = useState('');
  const [editingEvent, setEditingEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle de estado do modal

  useEffect(() => {
    axios.get('http://localhost:5000/eventoCalendario')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => console.error("Erro ao carregar eventos:", error));
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setIsModalOpen(true); // Abrir o modal ao clicar em uma data
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      titulo,
      descricao,
      data: date.toISOString().split('T')[0],
      horario
    };

    if (editingEvent) {
      axios.put(`http://localhost:5000/eventoCalendario/${editingEvent.id}`, data)
        .then(response => {
          alert(response.data.message);
          setEvents(events.map(ev => (ev.id === editingEvent.id ? { ...ev, ...data } : ev)));
          resetForm();
          setIsModalOpen(false); // Fechar o modal após a submissão
        })
        .catch(error => console.error("Erro ao editar evento:", error));
    } else {
      axios.post('http://localhost:5000/eventoCalendario', data)
        .then(response => {
          alert(response.data.message);
          setEvents([...events, { ...data, id: response.data.id }]);
          resetForm();
          setIsModalOpen(false); // Fechar o modal após a submissão
        })
        .catch(error => console.error("Erro ao adicionar evento:", error));
    }
  };

  const resetForm = () => {
    setTitulo('');
    setDescricao('');
    setHorario('');
    setEditingEvent(null);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/eventoCalendario/${id}`)
      .then(response => {
        alert(response.data.message);
        setEvents(events.filter(event => event.id !== id));
      })
      .catch(error => console.error("Erro ao deletar evento:", error));
  };

  const handleEdit = (event) => {
    setTitulo(event.titulo);
    setDescricao(event.descricao);
    setHorario(event.horario);
    setDate(new Date(event.data)); 
    setEditingEvent(event);
    setIsModalOpen(true); // Abrir o modal ao editar um evento
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('pt-BR');
  };

  const renderEvents = () => {
    return events.map(event => (
      <div key={event.id} className="event-card">
        <h3>{event.titulo}</h3>
        <p>{event.descricao}</p>
        <p><strong>Data:</strong> {formatDate(event.data)}</p>
        <p><strong>Horário:</strong> {event.horario}</p>
        <div className="event-buttons">
          <button onClick={() => handleEdit(event)} className="btn-edit">Editar</button>
          <button onClick={() => handleDelete(event.id)} className="btn-delete">Deletar</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="calendar-container">
      <h1>Calendário de Eventos</h1>
      <p className="p-comdestaque">Selecione uma data</p>

      <div className="calendar-wrapper">
        <div className="calendar">
          <Calendar
            onChange={handleDateChange}
            value={date}
          />
        </div>

        {/* Modal de Formulário de Evento */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <form onSubmit={handleSubmit} className="event-form">
                <h3>{editingEvent ? 'Editar Evento' : 'Adicionar Novo Evento'}</h3>
                <div>
                  <label>Título:</label>
                  <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Descrição:</label>
                  <textarea
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Data:</label>
                  <input
                    type="date"
                    value={date.toISOString().split('T')[0]}
                    onChange={(e) => setDate(new Date(e.target.value))}
                    required
                  />
                </div>
                <div>
                  <label>Horário:</label>
                  <input
                    type="time"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-submit">{editingEvent ? 'Atualizar Evento' : 'Adicionar Evento'}</button>
              </form>
              <button className="close-modal" onClick={() => setIsModalOpen(false)}>Fechar</button>
            </div>
          </div>
        )}
      </div>

      <div className="events-list">
        <h2>Eventos</h2>
        {renderEvents()}
      </div>
    </div>
  );
};

export default CalendarioEventos;
