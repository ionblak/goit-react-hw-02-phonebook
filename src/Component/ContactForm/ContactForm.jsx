import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonForm from './ButtonForm';
import styles from './ContactForm.module.css';

import { v4 as uuidv4 } from 'uuid';

class Contactform extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    const contact = { id: uuidv4(), name, number };
    e.preventDefault();
    this.props.onSubmitForm(contact);

    this.resetForm();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name)
      this.setState({
        [name]: value,
      });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  labelInputIdName = uuidv4();
  labelInputIdNumber = uuidv4();

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor={this.labelInputIdName}>
          Name
        </label>
        <input
          className={styles.input}
          id={this.labelInputIdName}
          type="text"
          name="name"
          required
          placeholder="Enter name"
          value={name}
          onChange={this.handleChange}
        ></input>
        <label className={styles.label} htmlFor={this.labelInputIdNumber}>
          Number
        </label>
        <input
          className={styles.input}
          id={this.labelInputIdNumber}
          type="tel"
          name="number"
          required
          placeholder="Enter you number"
          value={number}
          onChange={this.handleChange}
        ></input>
        <ButtonForm />
      </form>
    );
  }
}
Contactform.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
export default Contactform;
