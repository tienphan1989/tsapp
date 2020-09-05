import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { green, yellow, lightGreen, red } from '@material-ui/core/colors';

function createData(Date, Result, Grade) {
  return { Date, Result, Grade };
}

export default function SugarTable(props) {

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

  const newRows = props.sugarData.map(screen => createData(screen.created_at, screen.result, <div style={{backgroundColor: `${colorData(screen.result)}`}}>.</div>))



  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Sugar level</TableCell>
            <TableCell align="right">Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newRows.map((row) => (
            <TableRow key={row.Date}>
              <TableCell component="th" scope="row" align="right">
                {row.Date}
              </TableCell>
              <TableCell align="right">{row.Result}</TableCell>
              <TableCell align="right">{row.Grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

