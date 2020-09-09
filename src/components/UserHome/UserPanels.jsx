import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FileCopyIcon from '@material-ui/icons/FileCopy';import SettingsIcon from '@material-ui/icons/Settings';
import NotesIcon from '@material-ui/icons/Notes';import UserProfile from './UserProfile.jsx';
import VaccinePanel from './VaccinePanel.jsx';
import StatisticsPanel from './StatisticsPanel.jsx';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import UserGoals from './UserGoals'


const styles = theme => ({
  icon: {
    marginRight: theme.spacing(1)
  },
  root: {
    display: 'block'
  }
});

const UserPanels = withStyles(styles)(({ classes }) => {
  return (
    <Fragment>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <SettingsIcon className={classes.icon} />
          <Typography variant="subtitle1">My profile</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.root}>
          <UserProfile />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <NotesIcon className={classes.icon} />
          <Typography variant="subtitle1">Biostatistics</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.root}>
          <Typography><StatisticsPanel /></Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <FileCopyIcon className={classes.icon} />
          <Typography variant="subtitle1">Vaccine record</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.root}>
          <VaccinePanel />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <AssignmentTurnedInIcon className={classes.icon} />
          <Typography variant="subtitle1">Goals</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.root}>
        <UserGoals/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <EmojiFoodBeverageIcon className={classes.icon} />
          <Typography variant="subtitle1">Saved recipes</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.root}>
        </ExpansionPanelDetails>
      </ExpansionPanel>
        
    </Fragment>
  );
});

export default UserPanels;
