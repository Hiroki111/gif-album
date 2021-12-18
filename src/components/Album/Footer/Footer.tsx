import { Typography } from '@material-ui/core';

import { useStyles } from './useStyles';

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        {'Copyright © '}
        <a href="https://github.com/Hiroki111" rel="noreferrer" target="_blank">
          Hiroki111
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
}
