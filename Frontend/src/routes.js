import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HelloMessage from './HelloMessage';
import Teste from './paginas/Teste';
import ListaLivro from './paginas/Teste/ListaLivro';
import carros from './paginas/Teste/Carro/index';
import Usuario from './paginas/Teste/Usuario/index';
import Login from './paginas/Teste/Login/index';


function routes () {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={HelloMessage}/>
            <Route path="/Teste" component={Teste}/>
            <Route path="/carros" component={carros}/>
            <Route path="/ListaLivro" component={ListaLivro}/>
            <Route path="/Usuario" component={Usuario}/>
            <Route path="/Login" component={Login}/>
            
        </Switch>
        </BrowserRouter>
    )
}

export default routes;