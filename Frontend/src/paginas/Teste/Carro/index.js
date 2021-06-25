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
import teste from './teste.jpg';
import { createBrowserHistory } from 'history';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  }
    });

  function Carro() {
  const classes = useStyles();
  const [carros, setCarros] = useState([]);

    useEffect(() => {
        api.get('carros',{}).then(response => {
            setCarros(response.data);
        });
    }, []);
    
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Grid container spacing={1}>
           <Grid container item xs={12} spacing={3}>
              <Card className={classes.root}>
              
         
    {
      
      carros.map(carros => (
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={teste}
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
          <Button size="small" color="primary" href="/Usuario">
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
        </Grid>
      </Grid>
     </Grid>
  </React.Fragment>
  );
}

export default Carro;
