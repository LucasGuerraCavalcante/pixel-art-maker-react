import { createUseStyles } from 'react-jss';

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(50, 1fr)',
    gridTemplateColumns: 'repeat(50, 1fr)',
    width: '80vw',
    height: '80vw',
    border: '2px solid black'
  },
  pixel: {
    cursor: 'pointer',
    background: 'white',
    '&:hover': {
        transform: 'scale(1.1)',
        border: '1px solid black',
    }    
  },
  colorInput: {
    margin: '1rem',
    padding: '0',
    width: '80vw',
    height: '30px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
  }
});
