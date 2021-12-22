import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    padding: '16px',
  },
  gif: {
    width: '100%',
    height: 'auto',
  },
  closeIconWrapper: {
    paddingBottom: '16px',
  },
  closeIcon: {
    cursor: 'pointer',
  },
}));
