import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddContactForm from './AddContactForm';
import SearchContact from './SearchContact';
import ContactList from './ContactList';

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Llamada a la API para obtener los contactos
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const allContacts = response.data;
        // Seleccionar un número aleatorio de contactos, por ejemplo 5
        const randomContacts = selectRandomContacts(allContacts, 5);
        setContacts(randomContacts);
      })
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  // Función para seleccionar un número aleatorio de contactos
  const selectRandomContacts = (contactsArray, numberOfContacts) => {
    const shuffled = contactsArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfContacts);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <h1>Gestor de Contactos</h1>
      <AddContactForm />
      <SearchContact onSearch={handleSearch} />
      <ContactList contacts={contacts} searchTerm={searchTerm} />
    </div>
  );
};

export default ContactApp;
