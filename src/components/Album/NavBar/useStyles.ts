import { alpha, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    width: 'auto',
    marginLeft: '24px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: '70%',
      justifyContent: 'space-between',
    },
  },
  iconButton: {
    padding: '10px',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '8px',
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));
