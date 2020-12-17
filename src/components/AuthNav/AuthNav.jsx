import React from 'react';
import { NavLink } from 'react-router-dom';
import { routesPath } from '../../routes.js';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <li className={styles.listItem}>
        <NavLink
          exact
          to={routesPath.LOGIN}
          className={styles.link}
          activeClassName={styles.active}
        >
          Login
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink
          exact
          to={routesPath.REGISTER}
          className={styles.link}
          activeClassName={styles.active}
        >
          Register
        </NavLink>
      </li>
    </>
  );
};

export default AuthNav;
