import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactFormContainer';
import Filter from '../components/Filter/FilterContainer';
import ContactList from '../components/ContactList/ContactListContainer';
import { CSSTransition } from 'react-transition-group';
import { getContacts } from '../redux/phonebook/phonebookOperations';
import { getToken } from '../redux/auth/authSelectors';
import style from '../components/App/App.module.css';
import PropTypes from 'prop-types';

class ContactsPage extends Component {
  static propTypes = {
    getContacts: PropTypes.func.isRequired,
    isLogged: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  };

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <div className={style.contactContainer}>
        <CSSTransition in={true} appear={true} timeout={500} classNames={style}>
          <h1 className={style.title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <h2 className={style.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: getToken(state),
});

const mapDispatchToProps = {
  getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
