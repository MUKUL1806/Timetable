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

function createData(subject, teacher, timing, link, clink) {
    return { subject, teacher, timing, link, clink };
}


let rows = [];
const E31s = 'Antenna & Wave Propagation';
const E31t = 'R.P.Yadav';
const E31li = 'https://meet.google.com/ikj-aohn-jbp?hs=224';
const E31ci = 'https://classroom.google.com/u/0/c/MjU0NjE3MDA2OTU0';
const E32s = 'Computer Architecture';
const E32t = 'Rakesh Bairathi';
const E32li = 'https://meet.google.com/lookup/afwfaalh4z';
const E32ci = 'https://classroom.google.com/u/0/c/MjUxNjE5OTg1NDUx';
const E33s = 'Wireless & Mobile Communication';
const E33t = 'ILA Sharma';
const E33li = 'https://meet.google.com/lookup/gcycngnp3n';
const E33ci = 'https://classroom.google.com/u/0/c/MjUxNjQ0MjI5NDk5';
const E34s = 'Control System Engineering';
const E34t = 'Chitrakant Sahu';
const E34li = 'https://zoom.us/j/6874938575?pwd=WStPV1V0UE15OFpHUGg0YnpQVk4xZz09';
const E34ci = 'https://classroom.google.com/u/0/c/MjUxOTgwOTYyNDA0';
const E35s = 'Embedded Systems';
const E35t = 'Lava Bhargava';
const E35li = 'https://meet.google.com/fsn-odfd-ywk?authuser=0';
const E35ci = 'https://classroom.google.com/u/0/c/MjU0NTgwNDc5OTE0';
const E36s = 'Analog Cmos IC';
const E36t = 'D.Boolchandani';
const E36li = 'https://meet.google.com/soc-nsvy-zpq';
const E36ci = 'https://classroom.google.com/u/0/c/MjUxODU5MDk4NTIy';

export default function BasicTable() {
    const classes = useStyles();
    const [day, setDay] = useState(new Date().getDay());
    const updateday = () => {
        setDay(new Date().getDay());
    }
    setInterval(updateday, 1000);
    if (day === 1) {
        rows = [
            createData(E33s, E33t, '9-9.45AM', E33li, E33ci),
            createData(E32s, E32t, '10-10.45AM', E32li, E32ci),
            createData(E31s, E31t, '11-11.45PM', E31li, E31ci),
            createData(E36s, E36t, '12-12.45PM', E36li, E36ci),
        ];
    }
    else if (day === 2) {
        rows = [
            createData(E32s, E32t, '9-9.45AM', E32li, E32ci),
            createData(E33s, E33t, '10-10.45AM', E33li, E33ci),
            createData(E34s, E34t, '11-11.45PM', E34li, E34ci),
            createData(E35s, E35t, '12-12.45PM', E35li, E35ci),
        ];
    }
    else if (day === 3) {
        rows = [
            createData(E34s, E34t, '9-9.45AM', E34li, E34ci),
            createData(E32s, E32t, '10-10.45AM', E32li, E32ci),
            createData(E31s, E31t, '11-11.45PM', E31li, E31ci),
            createData(E36s, E36t, '12-12.45PM', E36li, E36ci),
        ];
    }
    else if (day === 4) {
        rows = [
            createData(E31s, E31t, '9-9.45AM', E31li, E31ci),
            createData(E33s, E33t, '10-10.45AM', E33li, E33ci),
            createData(E34s, E34t, '11-11.45PM', E34li, E34ci),
            createData(E35s, E35t, '12-12.45PM', E35li, E35ci),
        ];
    }
    else if (day === 5) {
        rows = [
            createData(E35s, E35t, '9-9.45AM', E35li, E35ci),
            createData(E32s, E32t, '10-10.45AM', E32li, E32ci),
            createData(E31s, E31t, '11-11.45PM', E31li, E31ci),
            createData(E36s, E36t, '12-12.45PM', E36li, E36ci),
        ];
    }
    else if (day === 6) {
        rows = [
            createData(E36s, E36t, '9-9.45AM', E36li, E36ci),
            createData(E33s, E33t, '10-10.45AM', E33li, E33ci),
            createData(E34s, E34t, '11-11.45PM', E34li, E34ci),
            createData(E35s, E35t, '12-12.45PM', E35li, E35ci),
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
                                <TableCell ><a href={row.clink} style={{ textDecoration: "none" }}>Classroom Link</a></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        );
    }
}