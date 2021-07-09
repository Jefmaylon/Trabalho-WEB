import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Header from './Header';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Rua São Paulo, 1.147 - Victor Konder, Blumenau - SC'} <br/>
        {'jefmaylon@gmail.com' } <br/>
        {'kadovargas@gmail.com'} <br/>
        {'divino07rafa@gmail.com'} <br/>
        <Link color="inherit" href="/Blog">
          SENAI-RENT-A-CAR
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
}));

const sections = [
    { title: '', url: '#' },
    { title: '', url: '#' },
    { title: '', url: '#' },
  
];

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Header title="SENAI-RENT-A-CAR" sections={sections} />
      <CssBaseline />
      <Container component="main" className={classes.main} >
        <Typography variant="h3" component="h1" gutterBottom>
          Sobre o SENAI rent a car
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
              Uma empresa especializada em aluguel de carros no Brasil e na América Latina. Com nossa experiência de 47 anos, gostaríamos de convidar você a repensar e a construir um novo significado para a mobilidade.
            Porque, para nós, mobilidade tem tudo a ver com liberdade. É poder chegar aonde você quer da maneira mais prática e segura possível. Nós adoramos essa liberdade, mas também entendemos que ela possui diferentes significados para cada um. 
            Por isso, nossa missão é oferecer a você a melhor opção para estar ao seu lado em cada trajeto.
            Desde 1973 cuidamos do caminho de mais de 10 milhões de pessoas, com o veículo ideal para cada tipo de roteiro. Apesar dos carros serem feitos em série, suas viagens não são.
            Estamos ao seu lado com 608 agências nas principais cidades e aeroportos do Brasil, Argentina, Chile, Colômbia, Equador, Paraguai e Uruguai. 
            Com uma frota de mais de 325 mil carros, você escolhe o tipo de veículo que melhor se encaixa à sua necessidade.
            Temos orgulho em dizer que a Localiza​​ oferece hoje a melhor experiência em mobilidade da América do Sul.
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}