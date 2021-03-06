import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core/styles";
import { green, yellow, lightGreen, red } from "@material-ui/core/colors";
import ReactPaginate from "react-paginate";

function createData(Date, Systolic, Diastolic, Grade) {
  return { Date, Systolic, Diastolic, Grade };
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
    fontFamily: "Lato",
    fontSize: "14px",
  },
});

export default function PressureTable(props) {
  const classes = useStyles();

  let colorData = (num) => {
    if (num <= 129) {
      return green["A700"];
    } else if (num >= 130 && num <= 139) {
      return lightGreen["A400"];
    } else if (num >= 140 && num <= 179) {
      return yellow["500"];
    } else if (num >= 180) {
      return red["500"];
    }
  };

  const newRows = props.pressureElements.map((screen) =>
    createData(
      screen.display_date,
      screen.systolic_pressure,
      screen.diastolic_pressure,
      <div
        style={{ backgroundColor: `${colorData(screen.systolic_pressure)}` }}
      >
         
      </div>
    )
  );

  let paginationElement;
  if (props.pageCount > 1) {
    paginationElement = (
      <ReactPaginate
        pageCount={props.pageCount}
        onPageChange={props.onPressureChange}
        forcePage={props.forcePage}
        previousLabel={"←"}
        nextLabel={"→"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        previousLinkClassName={"previous_page"}
        nextLinkClassName={"next_page"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
        breakLinkClassName={"atagelement"}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
      />
    );
  }

  return (
    <React.Fragment>
      <div>
        <div className="pagination-container">{paginationElement}</div>

        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                Date <AddCircleIcon />
              </TableCell>
              <TableCell align="right">Systolic</TableCell>
              <TableCell align="right">Diastolic</TableCell>
              <TableCell align="right">Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newRows.map((row) => (
              <TableRow key={row.Date}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableCell}
                >
                  {row.Date}
                </TableCell>
                <TableCell
                  align="right"
                  className={classes.tableCell}
                  key={row.Systolic}
                >
                  {row.Systolic}
                </TableCell>
                <TableCell
                  align="right"
                  className={classes.tableCell}
                  key={row.Diastolic}
                >
                  {row.Diastolic}
                </TableCell>
                <TableCell
                  align="right"
                  className={classes.tableCell}
                  key={row.Grade}
                >
                  {row.Grade}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </React.Fragment>
  );
}
