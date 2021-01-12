import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DigitalClock from './DigitalClock';
import Button from '@material-ui/core/Button';
export default function Navbar() {

    return (
        <div >
            <AppBar style={{ height: '50px', weidth: '50px' }} position="static">
                <Toolbar>
                    <Typography variant="h6" align="left">
                        <img style={{ height: '50px', width: '50px', borderRadius: "0.5rem", marginTop: ".8rem" }} src="https://upload.wikimedia.org/wikipedia/en/b/b7/Mnit_logo.png" alt="logo" />
                    </Typography>

                    <span style={{ paddingLeft: "1.2rem" }}>
                        <DigitalClock />
                    </span>
                </Toolbar>
            </AppBar>
        </div>
    );
}

