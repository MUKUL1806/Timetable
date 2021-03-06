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
const E31s = 'Railway & Airpot Engineering';
const E31t = 'AG';
const E31li = 'https://meet.google.com/fbb-frxz-yww';
const E32s = 'Design of Steel Structures';
const E32t = 'RN';
const E32li = 'https://meet.google.com/fdn-obwc-bus ';
const E33s = 'Design of Foundation & Earth Strucres';
const E33t = 'NS';
const E33li = 'https://meet.google.com/wwj-scyk-znf ';
const E34s = 'Design of RC System';
const E34t = 'AS';
const E34li = '#';
const E35s = 'Design of Masonry';
const E35t = 'SKH';
const E35li = '#';
const E36s = 'Water Resources Engineering';
const E36t = 'HA';
const E36li = 'https://meet.google.com/zah-dfvh-pzq ';

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
        ];
    }
    else if (day === 2) {
        rows = [
            createData(E31s, E31t, '9-9.45AM', E31li),
            createData(E34s, E34t, '10-10.45AM', E34li),
            createData(E35s, E35t, '11-11.45PM', E35li),
            createData(E36s, E36t, '12-12.45PM', E36li),
        ];
    }
    else if (day === 3) {
        rows = [
            createData(E35s, E35t, '9-9.45AM', E35li),
            createData(E31s, E31t, '10-10.45AM', E31li),
            createData(E32s, E32t, '11-11.45PM', E32li),
            createData(E33s, E33t, '12-12.45PM', E33li),
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