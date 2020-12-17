import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import UserMenu from '../UserMenu';
import WithAuth from '../Hoc/WithAuth';
import AuthNav from '../AuthNav';
import { routesPath } from '../../routes.js';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ isAuth }) => {
  const classes = useStyles();
  const phonebook = (
    <li>
      <NavLink
        exact
        to={routesPath.PHONEBOOK}
        className={styles.link}
        activeClassName={styles.active}
      >
        Contacts
      </NavLink>
    </li>
  );

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={styles.toolbar}>
            <ul className={styles.list}>{isAuth ? phonebook : <AuthNav />}</ul>
            <UserMenu />
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

NavBar.propTypes = {
  isAuth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default WithAuth(NavBar);
