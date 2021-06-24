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

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={teste}
          title="Contemplative Reptile"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Marca: {carros.modelo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={teste}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard teste
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
     
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Carro;
