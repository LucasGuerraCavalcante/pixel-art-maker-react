import React from 'react';

import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      Hello World
      {/* <Grid /> */}
    </div>
  );
}

export default App;
