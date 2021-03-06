import { createUseStyles } from 'react-jss';

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(50, 1fr)',
    gridTemplateColumns: 'repeat(50, 1fr)',
    width: '80vh',
    height: '80vh',
    border: '2px solid black'
  },
  pixel: {
    cursor: 'pointer',
    background: 'white',
    border: '1px solid black',  
  }
});
