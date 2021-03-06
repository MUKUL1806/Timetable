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
const E31s = 'PEPD';
const E31t = 'Robhidas Gangaram Bhoi';
const E31li = 'https://meet.google.com/opu-upnn-ciq';
const E32s = 'PR';
const E32t = 'Shiv Om Meena';
const E32li = 'https://meet.google.com/uwu-jkah-equ';
const E33s = 'MMChE';
const E33t = 'Sushant Upadhtyaya';
const E33li = 'https://meet.google.com/vgo-nwqv-bvz';
const E34s = 'PDC';
const E34t = 'Suja George';
const E34li = '#';
const E35s = 'CT';
const E35t = 'S.K.Jana';
const E35li = 'http://meet.google.com/wam-qtfr-kkr';
const E36s = 'TP';
const E36t = 'Kailash Singh';
const E36li = 'https://meet.google.com/usx-cyvt-pos';

export default function BasicTable() {
    const classes = useStyles();
    const [day, setDay] = useState(new Date().getDay());
    const updateday = () => {
        setDay(new Date().getDay());
    }
    setInterval(updateday, 1000);
    if (day === 1) {
        rows = [
            createData(E31s, E31t, '9-9.45AM', E31li),
            createData(E32s, E32t, '10-10.45AM', E32li),
            createData(E33s, E33t, '11-11.45PM', E33li),
            createData(E36s, E36t, '12-12.45PM', E36li),
        ];
    }
    else if (day === 2) {
        rows = [
            createData(E32s, E32t, '9-9.45AM', E32li),
            createData(E31s, E31t, '10-10.45AM', E31li),
            createData(E35s, E35t, '11-11.45PM', E35li),
            createData(E34s, E34t, '12-12.45PM', E34li),
        ];
    }
    else if (day === 3) {
        rows = [
            createData(E35s, E35t, '9-9.45AM', E35li),
            createData(E32s, E32t, '10-10.45AM', E32li),
            createData(E33s, E33t, '11-11.45PM', E33li),
            createData(E36s, E36t, '12-12.45PM', E36li),
        ];
    }
    else if (day === 4) {
        rows = [
            createData(E33s, E33t, '9-9.45AM', E33li),
            createData(E31s, E31t, '10-10.45AM', E31li),
            createData(E35s, E35t, '11-11.45PM', E35li),
            createData(E34s, E34t, '12-12.45PM', E34li),
        ];
    }
    else if (day === 5) {
        rows = [
            createData(E34s, E34t, '9-9.45AM', E34li),
            createData(E32s, E32t, '10-10.45AM', E32li),
            createData(E33s, E33t, '11-11.45PM', E33li),
            createData(E36s, E36t, '12-12.45PM', E36li),
        ];
    }
    else if (day === 6) {
        rows = [
            createData(E36s, E36t, '9-9.45AM', E36li),
            createData(E31s, E31t, '10-10.45AM', E31li),
            createData(E35s, E35t, '11-11.45PM', E35li),
            createData(E34s, E34t, '12-12.45PM', E34li),
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