import React, { Component } from 'react';

import Container from './Component/Container';
import ContactList from './Component/ContactList';
import Filter from './Component/Filter';
import ContactForm from './Component/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = contact => {
    const includedInContacts = this.state.contacts.find(
      item => item.name === contact.name,
    );
    if (includedInContacts !== undefined) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  handleChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  DeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.onSubmitForm} />
        <h2>Contacts</h2>
        <Filter value={filter} onHandleChange={this.handleChange} />
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.DeleteContact}
        />
      </Container>
    );
  }
}

export default App;
