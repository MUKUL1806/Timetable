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
const E31s = 'Optimization Methods in Engg. Design';
const E31t = 'Gulab Pamnani';
const E31li = '#';
const E32s = 'Total Quality Management';
const E32t = 'GS Dangayach';
const E32li = '#';
const E33s = 'Mechanical Vibrations';
const E33t = 'TC Gupta';
const E33li = '#';
const E34s = 'Computer Integrated Manufacturing';
const E34t = 'APC';
const E34li = '#';
const E35s = 'Refrigeration and Air Conditioning';
const E35t = 'Manish Kumar';
const E35li = '#';
const E36s = 'Advanced Manufacturing';
const E36t = 'Harlal Singh Mali';
const E36li = '#';
const E37s = 'Product Design & Development';
const E37t = 'Amit Singh';
const E37li = '#';
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
            createData(E37s, E37t, '1-1.45PM', E37li),
        ];
    }
    else if (day === 2) {
        rows = [
            createData(E31s, E31t, '9-9.45AM', E31li),
            createData(E34s, E34t, '10-10.45AM', E34li),
            createData(E35s, E35t, '11-11.45PM', E35li),
            createData(E36s, E36t, '12-12.45PM', E36li),
            createData(E37s, E37t, '1-1.45PM', E37li),
        ];
    }
    else if (day === 3) {
        rows = [
            createData(E35s, E35t, '9-9.45AM', E35li),
            createData(E31s, E31t, '10-10.45AM', E31li),
            createData(E32s, E32t, '11-11.45PM', E32li),
            createData(E33s, E33t, '12-12.45PM', E33li),
            createData(E37s, E37t, '1-1.45PM', E37li),
        ];
    }
    else if (day === 4) {
        rows = [
            createData(E32s, E32t, '9-9.45AM', E32li),
            createData(E34s, E34t, '10-10.45AM', E34li),
            createData(E35s, E35t, '11-11.45PM', E35li),
            createData(E36s, E36t, '12-12.45PM', E36li),
        ];
    }
    else if (day === 5) {
        rows = [
            createData(E36s, E36t, '9-9.45AM', E36li),
            createData(E31s, E31t, '10-10.45AM', E31li),
            createData(E32s, E32t, '11-11.45PM', E32li),
            createData(E33s, E33t, '12-12.45PM', E33li),
            createData(E37s, E37t, '1-1.45PM', E37li),
        ];
    }
    else if (day === 6) {
        rows = [
            createData(E33s, E33t, '9-9.45AM', E33li),
            createData(E34s, E34t, '10-10.45AM', E34li),
            createData(E35s, E35t, '11-11.45PM', E35li),
            createData(E36s, E36t, '12-12.45PM', E36li),
        ];
    }
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Subject</TableCell>
                        <TableCell >Teacher</TableCell>
                        <TableCell >Timing&nbsp;</TableCell>
                        <TableCell >Links&nbsp;</TableCell>
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
                            <TableCell ><a href={row.link} style={{ textDecoration: "none" }}>Lecture link</a></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}