import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { login } from '../redux/auth/authOperations';
import { connect } from 'react-redux';
import { routesPath } from '../routes';
import styles from '../components/ContactForm/ContactForm.module.css';
import MagicButton from '../shared/MagicButton';

function LoginPage({ login }) {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { resetForm }) => {
        login(values);
        resetForm({});
      }}
    >
      <Form className={styles.contactform}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <Field required type="email" name="email" className={styles.input} />
        <label htmlFor="email" className={styles.label}>
          Password
        </label>
        <Field
          required
          type="password"
          name="password"
          className={styles.input}
        />
        <p className={styles.regMessage}>
          Don't have an account? Sign Up{' '}
          <Link className={styles.link} to={routesPath.REGISTER}>
            here!
          </Link>
        </p>
        <MagicButton buttonText={'Login'} />
      </Form>
    </Formik>
  );
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
