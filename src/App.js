import React from 'react';

import Grid from './components/Grid/';
import ColorPicker from './components/ColorPicker/';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <ColorPicker />
      <Grid />
    </div>
  );
}

export default App;
