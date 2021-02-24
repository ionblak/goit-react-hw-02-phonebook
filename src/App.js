import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  labelInputIdName = uuidv4();
  labelInputIdNumber = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    const contact = { id: uuidv4(), name, number };

    e.preventDefault();
    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.labelInputIdName}>Name</label>
          <input
            id={this.labelInputIdName}
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <label htmlFor={this.labelInputIdNumber}>Number</label>
          <input
            id={this.labelInputIdNumber}
            type="tel"
            name="number"
            placeholder="Enter you number"
            value={this.state.number}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul></ul>
      </>
    );
  }
}

export default App;
