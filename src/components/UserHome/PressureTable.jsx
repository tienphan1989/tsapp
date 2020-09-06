import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { green, yellow, lightGreen, red } from '@material-ui/core/colors';

function createData(Date, Systolic, Diastolic, Grade) {
  return { Date, Systolic, Diastolic, Grade };
}

const useStyles = makeStyles({
  root: {
    width: '65%',
    margin: 'auto'
  },
  table: {
    minWidth: 650,
  },
});

export default function PressureTable(props) {
  const classes = useStyles();

  let colorData = (num) => {
    if(num < 120 && num <= 129){
      return green['A700']
    } else if(num <= 130 && num <= 139){
      return lightGreen['A400']
    } else if(num <= 140 && num <= 179){
      return yellow['500']
    } else if(num <= 180){
      return red['A700']
    }
  }

  const newRows = props.bpData.map(screen => createData(screen.created_at, screen.systolic_pressure, screen.diastolic_pressure, <div style={{backgroundColor: `${colorData(screen.systolic_pressure)}`}}>.</div>))

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Systolic</TableCell>
            <TableCell align="right">Diastolic</TableCell>
            <TableCell align="right">Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newRows.map((row) => (
            <TableRow key={row.Date}>
              <TableCell component="th" scope="row">
                {row.Date}
              </TableCell>
              <TableCell align="right">{row.Systolic}</TableCell>
              <TableCell align="right">{row.Diastolic}</TableCell>
              <TableCell align="right">{row.Grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}