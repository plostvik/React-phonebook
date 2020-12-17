import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItemContainer';
import styles from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function ContactList({ contacts }) {
  return (
    <TransitionGroup component="ul" className={styles.contactList}>
      {contacts.map(el => {
        return (
          <CSSTransition key={el.id} classNames={styles} timeout={250}>
            <ContactListItem contact={el} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};
