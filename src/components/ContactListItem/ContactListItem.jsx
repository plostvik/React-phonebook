import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ contact, removeContact }) => {
  return (
    <div className={styles.wrapper}>
      <li className={styles.listItem}>
        {contact.name}: <span>{contact.number}</span>
      </li>
      <button
        type="button"
        onClick={() => removeContact(contact.id)}
        className={styles.btnDelete}
      >
        X
      </button>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactListItem;
