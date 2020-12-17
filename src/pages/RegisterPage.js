import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { registerUser } from '../redux/auth/authOperations';
import styles from '../components/ContactForm/ContactForm.module.css';
import MagicButton from '../shared/MagicButton';
import PropTypes from 'prop-types';

const RegisterPage = ({ registerUser }) => {
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values, { resetForm }) => {
          registerUser(values);
          resetForm({});
        }}
      >
        <Form className={styles.contactform}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <Field type="text" name="name" className={styles.input} required />
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <Field type="email" name="email" className={styles.input} required />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            className={styles.input}
            required
          />
          <MagicButton buttonText={'Register'} />
        </Form>
      </Formik>
    </>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(RegisterPage);

RegisterPage.prototype = {
  registerUser: PropTypes.func.isRequired,
};
