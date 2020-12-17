import React from 'react';
import { connect } from 'react-redux';
import LogButton from '../../shared/LogButton';
import { logout } from '../../redux/auth/authOperations';
import Avatar from '@material-ui/core/Avatar';
import { getUser, getToken } from '../../redux/auth/authSelectors';
import style from './UserMenu.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginRight: 10,
  },
}));

const UserMenu = ({ user, logout, isUserLoggedIn }) => {
  const classes = useStyles();
  const { name } = user;
  let firstLetter;
  const handleLogout = () => logout();
  if (name) {
    firstLetter = name.split('')[0].toUpperCase();
  }

  return (
    <div className={style.container}>
      {isUserLoggedIn && name ? (
        <>
          <Avatar className={classes.purple}>{firstLetter}</Avatar>
          <h3 className={style.message}>Welcome, {name}</h3>
          <LogButton buttonText={'Logout'} onClick={handleLogout} />
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  isUserLoggedIn: getToken(state),
  user: getUser(state),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

UserMenu.prototype = {
  isUserLoggedIn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  user: PropTypes.object.isRequired,
};
