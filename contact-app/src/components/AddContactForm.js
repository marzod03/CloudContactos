import React, { useState } from 'react';

const AddContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo objeto de contacto
    const newContact = {
      id: Date.now(), // Genera un ID único basado en la fecha de la pc xd
      name,
      phone
    };

    // Llamar a la funcin para agregar el contacto
    addContact(newContact);

    // Limpiar el formulario
    setName('');
    setPhone('');
  };

  return (
    <div>
      <h2>Añadir Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nombre Completo" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input 
          type="text" 
          placeholder="Numero Telefonico xd" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Añadir</button>
      </form>
    </div>

    
  );
};

export default AddContactForm;
