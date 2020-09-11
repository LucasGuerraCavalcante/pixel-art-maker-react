import React, { useState } from 'react';

import Grid from './components/Grid/';
import GridSwitch from './components/GridSwitch/';
import ColorPicker from './components/ColorPicker/';
import useStyles from './App.styles';

function App() {
  const [currentColor, setCurrentColor] = useState();
  const [showGrid, setShowGrid] = useState(false);

  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.toolBox}>
        <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor} />
        <GridSwitch showGrid={showGrid} setShowGrid={setShowGrid} />
      </div>
      <Grid currentColor={currentColor} showGrid={showGrid} />
    </div>
  );
}

export default App;
