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
    marginTop: theme.spacing(2),
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
  },
}));

const MagicButton = ({ buttonText }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Button
        className={classes.menuButton}
        type="submit"
        variant="contained"
        color="primary"
      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
};

export default MagicButton;

MagicButton.prototype = {
  buttonText: PropTypes.string.isRequired,
};
