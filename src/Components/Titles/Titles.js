import React from 'react';
import { AppBar, Toolbar, Typography } from "material-ui";

const Titles = () => (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className='typography'>
            React Weather App
        </Typography>
      </Toolbar>
    </AppBar>
);

export default Titles;
