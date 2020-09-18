import React, { useState } from 'react';

import Grid from './components/Grid/';
import GridSwitch from './components/GridSwitch/';
import ColorPicker from './components/ColorPicker/';
import ColorPalette from './components/ColorPalette/';
import CurrentColor from './components/CurrentColor/';
import useStyles from './App.styles';

function App() {
  const [currentColor, setCurrentColor] = useState('#000000');
  const [colorHistoryPalatte, setColorHistoryPalatte] = useState(['#000000']);
  const [showGrid, setShowGrid] = useState(false);

  const onSetColor = (color) => {
    setColorHistoryPalatte(colorHistoryPalatte.concat(color));
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

      <div className={classes.colorBox}>
        <CurrentColor 
          currentColor={currentColor} 
        />

        <ColorPalette 
            colorHistoryPalatte={colorHistoryPalatte} 
            setCurrentColor={setCurrentColor} 
        />

        <div>
          Right click to erase
        </div>
      </div>

      <Grid 
        currentColor={currentColor} 
        showGrid={showGrid} 
      />
    </div>
  );
}

export default App;
