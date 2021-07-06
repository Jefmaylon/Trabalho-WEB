import React, { useState, useEffect } from 'react';
import api from '../services/api';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import image from './foto.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Rua São Paulo, 1.147 - Victor Konder, Blumenau - SC'} <br/>
      {'jefmaylon@gmail.com' } <br/>
      {'kadovargas@gmail.com'} <br/>
      {'divino07rafa@gmail.com'} <br/>
      <Link color="inherit" href="/Blog">
        SENAI rent a car
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Carro() {

  const classes = useStyles();
  const [carros, setCarros] = useState([]);
  

    useEffect(() => {
        api.get('carros',{}).then(response => {
            setCarros(response.data);
        });
    }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar color="primary">
          <CameraIcon className={classes.icon} />
          <Button color="Black" disableElevation size="large" href="/Blog">
          Início
          </Button>
        </Toolbar>
        
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {carros.map((carros, card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {carros.marca} {carros.modelo}
                    </Typography>
                    <Typography>
                    Cor: {carros.cor} <br></br>Quantidade de lugares: {carros.qtdlugares} <br></br>Ano: {carros.ano}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="/Login">
                      Alugar
                    </Button>
                    <Button size="small" color="primary" href="/Blog">
                      Saiba mais
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          SENAI rent a car
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}