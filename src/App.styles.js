import { createUseStyles } from 'react-jss';

export default createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box'
  },
  toolBox: {
    display: 'flex',
    alignItems: 'center',
    width: '80vh',
    height: '40px',
  }
});
