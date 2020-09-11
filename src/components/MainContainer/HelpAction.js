import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';const styles = theme => ({
  fab: {
    margin: 0,
    top: 'auto',
    left: 'auto',
    bottom: 140,
    right: 10,
    position: 'fixed'
  }
});

const ExtendedFab = withStyles(styles)(({ classes, ...props }) => {
  const isExtended = React.Children.toArray(props.children).find(
    child => typeof child === 'string'
  );

  return (
    <Fab
      className={classes.fab}
      variant={isExtended && 'extended'}
      {...props}
    />
  );
});

const HelpAction = ({ fabColor }) => (
  <ExtendedFab size='small' color="primary">
    Help
    <HelpOutlineIcon/>
  </ExtendedFab>
);

export default HelpAction;
