import React, {useState} from 'react';
import api from '../services/api';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function CadastroLivro() {
  const classes = useStyles();

    const [nome, setDescricao] = useState('');
    const [codigoeditora, setEditora] = useState('');
    const [issbn, setIsbn] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [codigoassunto, setAssunto] = useState('');
    const [autor, setAutor] = useState('');

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            nome,
            codigoeditora,
            issbn,
            quantidade,
            codigoassunto,
            autor
        };

        try {
            console.log(dados);
            const response = await api.post('book', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do livro é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar livro " + error.message);            
        }
    }

    return (

        <form onSubmit={handleCadastro}>
          <div>
            <TextField 
            required id="standard" 
            label="Nome" defaultValue=""
            value={nome}
            onChange={e => setDescricao(e.target.value)}
            />

            <TextField 
            required id="standard-required" 
            label="Código editora" defaultValue=""
            value={codigoeditora}
            onChange={e => setEditora(e.target.value)}
            /> 

            <TextField 
            required id="standard-required" 
            label="ISBN" defaultValue="" 
            value={issbn}
            onChange={e => setIsbn(e.target.value)}
            />

            <TextField 
            required id="standard-required" 
            label="Quantidade" defaultValue="" 
            value={quantidade}
            onChange={e => setQuantidade(e.target.value)}
            />

            <TextField 
            required id="standard-required" 
            label="Assunto" defaultValue=""
            value={codigoassunto}
            onChange={e => setAssunto(e.target.value)}
            />

            <TextField 
            required id="standard-required" 
            label="Autor" defaultValue="" 
            value={autor}
            onChange={e => setAutor(e.target.value)}
            />

            <Button variant="contained" type="submit" color="primary">
                Cadastrar Livro
            </Button>

          </div>
        </form>
      );

    /*return (
       <div>
            <div>
                <h1>Cadastro de Livro</h1>

                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="Descricao do livro"
                        value={nome}
                        onChange={e => setDescricao(e.target.value)}/> 

                    <input 
                        placeholder="Editora do livro"
                        value={codigoeditora}
                        onChange={e => setEditora(e.target.value)}/> 

                    <input 
                        placeholder="Isbn"
                        value={issbn}
                        onChange={e => setIsbn(e.target.value)}/> 

                    <input 
                        placeholder="quantidade"
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}/> 

                    <input 
                        placeholder="assunto"
                        value={codigoassunto}
                        onChange={e => setAssunto(e.target.value)}/> 

                    <input 
                        placeholder="autor"
                        value={autor}
                        onChange={e => setAutor(e.target.value)}/> 
                    <button className="button" type="submit">Cadastrar Livro</button>
                </form>
    

            </div>
        </div>

    );*/
}
