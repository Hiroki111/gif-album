import { AppBar, Card, CardMedia, Container, Grid, Toolbar, Typography } from '@material-ui/core';

import { useStyles } from './useStyles';

export function Album() {
  const classes = useStyles();

  const gifs = [{ id: 1 }];

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Gif Album
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={4}>
          {gifs.map((gif) => (
            <Grid item key={gif.id} xs={12} sm={6} md={4}>
              <Card className={classes.gifCard}>
                <CardMedia className={classes.thumbnail} image="url" title="Image title" />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
