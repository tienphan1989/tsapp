import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function AutoGrid() {
  return (
    <div className='user-homepage'>
      <Grid container spacing={4} justify="space-between" style={{width:'100%'}}>
        <Grid item xs >
          <Paper className='user-column-1 user-paper'>Stats go here</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className='user-column-2 user-paper'>Graph and tabs go here</Paper>
        </Grid>
        <Grid item xs>
          <Paper className='user-api user-paper' >
            <Paper className='user-api-1 user-paper'>
              generate meal plan
            </Paper>
            <Paper className='user-api-2 user-paper'>
              recipe nutrition
          </Paper>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
