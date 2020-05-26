import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core';


export default props => 
    <AppBar position="static">
        <Toolbar>
        <Typography variant="h5" component="h2" color="inherit">
            Mind Care
        </Typography>
        </Toolbar>
    </AppBar>
