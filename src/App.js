import React from 'react';

import Grid from './components/Grid';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Grid />
    </div>
  );
}

export default App;
