import { createUseStyles } from 'react-jss';

export default createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolBox: {
    display: 'flex',
    alignItems: 'center',
    width: '80vw',
    height: '40px',
  }
});
