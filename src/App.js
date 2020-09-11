import React, { useState } from 'react';

import Grid from './components/Grid/';
import ColorPicker from './components/ColorPicker/';
import useStyles from './App.styles';

function App() {
  const [currentColor, setCurrentColor] = useState('#56BC58');

  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.toolBox}>
        <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor} />
        
      </div>
      <Grid currentColor={currentColor} />
    </div>
  );
}

export default App;
