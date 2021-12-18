import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    'margin-top': '32px',
  },
  gifCard: {
    height: '100%',
    display: 'flex',
    'flex-direction': 'column',
  },
  thumbnail: {
    'padding-top': '56.25%',
  },
}));
