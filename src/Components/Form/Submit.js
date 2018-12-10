import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    textTransform: 'none'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

function SubmitButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button  type="submit" className={"testButton"} variant="raised" color="primary">
          Forecast
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
    </div>
  );
}

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitButton);
