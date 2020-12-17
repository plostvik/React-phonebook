import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebookOperations.js';
import {
  addContactError,
  setMessageToNull,
} from '../../redux/phonebook/phonebookActions';
import {
  getContacts,
  getMessage,
} from '../../redux/phonebook/phonebookSelectors.js';
import ContactForm from './ContactForm';

class ContactFormContainer extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    addContactError: PropTypes.func.isRequired,
    setMessageToNull: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const {
      contacts,
      addContact,
      addContactError,
      setMessageToNull,
    } = this.props;
    if (contacts.some(el => el.name === name)) {
      addContactError('Contact already exists!');
    } else {
      addContact(name, number);
      this.setState({ name: '', number: '' });
    }
    setTimeout(() => setMessageToNull(), 1500);
  };

  render() {
    return (
      <ContactForm
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  contacts: getContacts(state),
  message: getMessage(state),
});

const mapDispatchToProps = {
  addContact,
  addContactError,
  setMessageToNull,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactFormContainer);
