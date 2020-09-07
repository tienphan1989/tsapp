import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = theme => ({
  panelDetails: {
    flexDirection: 'column',
    height: 170,
    overflow: 'scroll'
  },
  icon: {
    marginRight: theme.spacing(1)
  }
});

const Diabetes = () => (
  <Fragment>
    <Typography paragraph>
    <h1 className="features-inside benefits-div">Redefine your health!</h1>
    <p>Get instant insight to improve diabetes management.</p>
    <p>Feedback becomes specific to the individual over time and provide meaningful and actionable insights.</p>
    In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
      in turpis vel tempor. Vivamus tincidunt turpis vitae porta
      dignissim. Quisque condimentum augue arcu, quis tincidunt erat
      luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
      nec, molestie tellus. Donec commodo consequat gravida. Mauris in
      rhoncus tellus, eget posuere risus. Pellentesque eget lectus
      lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer condimentum, sapien varius vulputate lobortis, urna elit
      vestibulum ligula, sit amet interdum lectus augue ac eros.
      Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
      est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
      elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
      ipsum ex, fermentum eu pretium quis, posuere et velit.    
      </Typography>
  </Fragment>
);

const Diet = () => (
  <Fragment>
    <Typography paragraph>
    <h3>ACTIONABLE.</h3>
    <p>Designed to educate diet.
    In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
      in turpis vel tempor. Vivamus tincidunt turpis vitae porta
      dignissim. Quisque condimentum augue arcu, quis tincidunt erat
      luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
      nec, molestie tellus. Donec commodo consequat gravida. Mauris in
      rhoncus tellus, eget posuere risus. Pellentesque eget lectus
      lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer condimentum, sapien varius vulputate lobortis, urna elit
      vestibulum ligula, sit amet interdum lectus augue ac eros.
      Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
      est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
      elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
      ipsum ex, fermentum eu pretium quis, posuere et velit.
    </p>
    </Typography>
  </Fragment>
);

const Heart = () => (
  <Fragment>
    <Typography paragraph>
    <h3>Health plan.</h3>
    <p>Get instant insight to improve diabetes management.<br/>
    Feedback becomes specific to the individual over time and provide meaningful and actionable insights.
    In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
      in turpis vel tempor. Vivamus tincidunt turpis vitae porta
      dignissim. Quisque condimentum augue arcu, quis tincidunt erat
      luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
      nec, molestie tellus. Donec commodo consequat gravida. Mauris in
      rhoncus tellus, eget posuere risus. Pellentesque eget lectus
      lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer condimentum, sapien varius vulputate lobortis, urna elit
      vestibulum ligula, sit amet interdum lectus augue ac eros.
      Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
      est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
      elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
      ipsum ex, fermentum eu pretium quis, posuere et velit.</p>
    </Typography>
  </Fragment>
);

const ScrollablePanelContent = withStyles(styles)(({ classes }) => (
  <Fragment>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <FavoriteIcon className={classes.icon} />
        <Typography>Diabetes</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        <Diabetes />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <FitnessCenterIcon className={classes.icon} />
        <Typography>Diet & Fitness</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        <Diet />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <LocalPharmacyIcon className={classes.icon} />
        <Typography>Care plan</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        <Heart />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Fragment>
));

export default ScrollablePanelContent;
