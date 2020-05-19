import React from 'react'
import {Paper, Tabs, Tab} from '@material-ui/core';

export default ({mentalConditions}) => 
<Paper >
    <Tabs
        value ={0}
        indicatorColor="primary"
        textColor="primary"
        centered
    >
    <Tab label="All " />
        {mentalConditions.map(group => 
            <Tab label={group} />
            )}
    </Tabs>
</Paper>