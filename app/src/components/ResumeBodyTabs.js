import React from 'react';
import {AppBar, Tab, Tabs} from 'material-ui';

export default ({tabLabels, value, handleChange}) => 
  <AppBar position="static" color="default">
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      fullWidth
    >
      {tabLabels.map(label => <Tab label={label} key={label} />)}
    </Tabs>
  </AppBar>