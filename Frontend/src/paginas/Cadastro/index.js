import React, {useState} from 'react';
import api from '../services/api';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Rua São Paulo, 1.147 - Victor Konder, Blumenau - SC'} <br/>
      {'jefmaylon@gmail.com' } <br/>
      {'kadovargas@gmail.com'} <br/>
      {'divino07rafa@gmail.com'} <br/>
      <Link color="inherit" href="#">
        SENAI rent a car
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

    const [Marca, setMarca] = useState('');
    const [Modelo, setModelo] = useState('');
    const [Ano, setAno] = useState('');
    const [Qtdlugares, setQtdlugares] = useState('');
    const [Cor, setCor] = useState('');
    const [Imagem, setImagem] = useState('');

    async function handleCadastro(e) {
      e.preventDefault();

      const dados = {
          Marca,
          Modelo,
          Ano,
          Qtdlugares,
          Cor,
          Imagem,
      };

      try {
          console.log(dados);
          const response = await api.post('carros', dados);
          const id = response.data.id;
          console.log(response.data);
          alert("Carro cadastrado com sucesso!");
          window.location.href = "/carros";
          // history.push('/');
      } catch (error) {
          alert("Erro ao cadastrar Carro " + error.message);            
      }
  }


  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar alt="Remy Sharp" src="https://img2.gratispng.com/20180427/olq/kisspng-sports-car-silhouette-car-profile-5ae39be400a062.1059544615248660200026.jpg" />
        <Typography component="h1" variant="h5">
          Cadastro de carro
        </Typography>

        <form className={classes.form} onSubmit={handleCadastro}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="Marca"
                name="Marca"
                variant="outlined"
                required
                fullWidth
                id="Marca"
                label="Marca"
                autoFocus
                value={Marca}
                onChange={e => setMarca(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Modelo"
                label="Modelo"
                name="Modelo"
                autoComplete="Modelo"
                value={Modelo}
                onChange={e => setModelo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Ano"
                label="Ano"
                id="Ano"
                value={Ano}
                onChange={e => setAno(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Quantidade de lugares"
                label="Quantidade de lugares"
                name="Quantidade de lugares"
                autoComplete="Quantidade de lugares"
                value={Qtdlugares}
                onChange={e => setQtdlugares(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Cor"
                label="Cor"
                name="Cor"
                autoComplete="Cor"
                value={Cor}
                onChange={e => setCor(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Imagem"
                label="Imagem"
                name="Imagem"
                autoComplete="Imagem"
                value={Imagem}
                onChange={e => setImagem(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar carro
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}