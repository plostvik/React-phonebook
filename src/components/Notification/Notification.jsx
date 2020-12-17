import React from 'react';
import style from './Notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className={style.notification}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Notification.defaultPros = {
  message: 'Oops, something went wrong!',
};
