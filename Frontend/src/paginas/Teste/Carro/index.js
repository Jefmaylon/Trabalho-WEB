import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from './foto.png';
import { createBrowserHistory } from 'history';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { setConfiguration } from 'react-grid-system';
import CssBaseline from '@material-ui/core/CssBaseline';
import FeaturedPost from './FeaturedPost';
import Header from './Header';
import Footer from './Footer';

setConfiguration({ maxScreenClass: 'xl' });

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Rua São Paulo, 1.147 - Victor Konder, Blumenau - SC'} <br/>
      {'jefmaylon@gmail.com' } <br/>
      {'kadovargas@gmail.com'} <br/>
      {''} <br/>
      <Link color="inherit" href="#">
        Alugue um carro
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30',
    
  }
    });

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    const sections = [
      { title: '', url: '' },
      { title: '', url: '#' },
      { title: '', url: '#' },
    
    ];

  function Carro() {

  const classes = useStyles();
  const [carros, setCarros] = useState([]);

    useEffect(() => {
        api.get('carros',{}).then(response => {
            setCarros(response.data);
        });
    }, []);

    return (
      
      <div>
        <Header title="Aluguel do SENAI" sections={sections} />
           <Card  style={{ width: '20rem'}} >       
        {
          carros.map(carros => (
            <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
               {carros.marca} {carros.modelo}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Cor: {carros.cor} <br></br>Quantidade de lugares: {carros.qtdlugares} <br></br>Ano: {carros.ano}
              </Typography>
    
            <CardActions>
              <Button size="small" color="primary" href="/Login">
                Alugar
              </Button>
              <Button size="small" color="primary" href="/teste.jpg">
                Saiba mais
              </Button>
            </CardActions>
            </CardContent>
          </CardActionArea>
          ))
        }
          </Card> 
          <Footer title="Aluguel do SENAI" description="" />
          </div>
    );
  }


export default Carro;

