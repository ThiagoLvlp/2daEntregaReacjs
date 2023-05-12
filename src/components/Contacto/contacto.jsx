import React, { useState } from 'react';
import './contactForm.css';

const ContactForm = () => {
const [nombre, setNombre] = useState('');
const [email, setEmail] = useState('');
const [mensaje, setMensaje] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
<div>Mensaje Enviado!</div>
};

return (
    <div className="contact-form-container">
    <h2>Formulario de Contacto</h2>
    <form onSubmit={handleSubmit}>
    <label htmlFor="nombre">Nombre:</label>
    <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
    />
    <label htmlFor="email">Email:</label>
    <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
    />    
    <label htmlFor="mensaje">Mensaje:</label>
    <textarea
        id="mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        rows="4"
        required
    ></textarea>
        <input type="submit" value="Enviar"/>
    </form>
    </div>
);
};

export default ContactForm;
