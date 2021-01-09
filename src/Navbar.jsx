import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DigitalClock from './DigitalClock';

export default function Navbar() {

    return (
        <div >
            <AppBar style={{ height: '50px', weidth: '50px' }} position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        <img style={{ height: '50px', width: '50px', borderRadius: "0.5rem", marginTop: ".8rem" }} src="Mnit_logo.png" alt="Mnit logo" />
                    </Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1>Time table</h1>
                    <div style={{ paddingLeft: "1.2rem" }}>
                        <DigitalClock />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

