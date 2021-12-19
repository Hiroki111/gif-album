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
  closeIconWrapper: {
    paddingBottom: '16px',
  },
  closeIcon: {
    cursor: 'pointer',
  },
}));
