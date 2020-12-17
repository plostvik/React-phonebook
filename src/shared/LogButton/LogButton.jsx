import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/purple';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: deepPurple,
  },
});

const useStyles = makeStyles(theme => ({
  menuButton: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
    boxShadow: 'none',
  },
}));

const LogButton = ({ buttonText, ...props }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Button
        {...props}
        className={classes.menuButton}
        type="button"
        variant="contained"
        color="primary"
      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
};

export default LogButton;

LogButton.prototype = {
  buttonText: PropTypes.string.isRequired,
};
