import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {MdDelete } from "react-icons/md";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});




export  function BasicTable({data}) {
  const classes = useStyles();
  console.log(data);

  const Table_Heading = ["Keywords", "Goals","Matches","Search Status","Delete Keyword"];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            {Table_Heading.map(heading=>(
                <TableCell align="right">{heading}</TableCell>
            ))}
            {/* <TableCell align="right">Goal</TableCell>
            <TableCell align="right">Matches</TableCell>
            <TableCell align="right">Search Status</TableCell>
            <TableCell align="right">Delete Keyword</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.keyword}
              </TableCell>
              <TableCell align="right">{row.goal}</TableCell>
              <TableCell align="right">{row.matches}</TableCell>
              <TableCell align="right">{row.search_status}</TableCell>
              <TableCell align="right"><MdDelete /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

