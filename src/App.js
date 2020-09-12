import React, { useState } from 'react';

import Grid from './components/Grid/';
import GridSwitch from './components/GridSwitch/';
import ColorPicker from './components/ColorPicker/';
import ColorPalette from './components/ColorPalette/';
import useStyles from './App.styles';

function App() {
  const [currentColor, setCurrentColor] = useState('#000');
  const [colorHistoryPalatte, setColorHistoryPalatte] = useState(['#000']);
  const [showGrid, setShowGrid] = useState(false);

  const onSetColor = (color) => {
    setColorHistoryPalatte(colorHistoryPalatte.slice(-5).concat(color))
    setCurrentColor(color);
  };

  const classes = useStyles();
  return (
    <div className={classes.app}>

      <div className={classes.toolBox}>
        <ColorPicker 
          currentColor={currentColor} 
          onSetColor={onSetColor}
        />

        <GridSwitch 
          showGrid={showGrid} 
          setShowGrid={setShowGrid} 
        />
      </div>

      <ColorPalette 
          colorHistoryPalatte={colorHistoryPalatte} 
          onSetColor={onSetColor} 
      />

      <Grid 
        currentColor={currentColor} 
        showGrid={showGrid} 
      />
    </div>
  );
}

export default App;
