import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
});

function createData(subject, teacher, timing, link) {
    return { subject, teacher, timing, link };
}


let rows = [];
const E35s = 'Mechanical Working of Metals';
const E35t = 'Vijay N. Nadakuduru';
const E35li = '#';
const E33s = 'Polymeric and Ceramic Materials';
const E33t = 'Ajaya K. Pradhan';
const E33li = '#';
const E34s = 'Materials in Industry';
const E34t = 'Abhishek Tripati';
const E34li = '#';
const E32s = 'Heat Treatment';
const E32t = 'Ashok Sharma';
const E32li = '#';
const E31s = 'Steel Making';
const E31t = 'Jyotirmaya Kar';
const E31li = '#';
const E36s = '';
const E36t = '';
const E36li = '';

export default function BasicTable() {
    const classes = useStyles();
    const [day, setDay] = useState(new Date().getDay());
    const updateday = () => {
        setDay(new Date().getDay());
    }
    setInterval(updateday, 1000);
    if (day === 1) {
        rows = [
            createData(E34s, E34t, '9-9.45AM', E34li),
            createData(E31s, E31t, '10-10.45AM', E31li),
            createData(E32s, E32t, '11-11.45PM', E32li),
            createData(E33s, E33t, '12-12.45PM', E33li),
            createData(E35s, E35t, '3-3.45PM', E35li),
        ];
    }
    else if (day === 2) {
        rows = [
            createData(E31s, E31t, '9-9.45AM', E31li),
            createData(E34s, E34t, '10-10.45AM', E34li),
            createData(E35s, E35t, '11-11.45PM', E35li),

            createData(E33s, E33t, '3-3.45PM', E33li),
        ];
    }
    else if (day === 3) {
        rows = [
            createData(E35s, E35t, '9-9.45AM', E35li),
            createData(E31s, E31t, '10-10.45AM', E31li),
            createData(E32s, E32t, '11-11.45PM', E32li),
            createData(E33s, E33t, '12-12.45PM', E33li),
            createData(E34s, E34t, '3-3.45PM', E34li),
        ];
    }
    else if (day === 4) {
        rows = [
            createData(E32s, E32t, '9-9.45AM', E32li),
            createData(E34s, E34t, '10-10.45AM', E34li),
            createData(E35s, E35t, '11-11.45PM', E35li),

            createData(E32s, E32t, '3-3.45PM', E32li),
        ];
    }
    else if (day === 5) {
        rows = [

            createData(E31s, E31t, '10-10.45AM', E31li),
            createData(E32s, E32t, '11-11.45PM', E32li),
            createData(E33s, E33t, '12-12.45PM', E33li),
            createData(E31s, E31t, '3-3.45PM', E31li),
        ];
    }
    else if (day === 6) {
        rows = [
            createData(E33s, E33t, '9-9.45AM', E33li),
            createData(E34s, E34t, '10-10.45AM', E34li),
            createData(E35s, E35t, '11-11.45PM', E35li),

        ];
    }
    {
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Subject</TableCell>
                            <TableCell >Teacher</TableCell>
                            <TableCell >Timing&nbsp;</TableCell>
                            <TableCell >Link&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    <a href={row.link} style={{ textDecoration: "none" }}>{row.subject}</a>
                                </TableCell>
                                <TableCell >{row.teacher}</TableCell>
                                <TableCell >{row.timing}</TableCell>
                                <TableCell ><a href={row.link} style={{ textDecoration: "none" }}>Lecture Link</a></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        );
    }
}