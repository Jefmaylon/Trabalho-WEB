import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Carros from './paginas/Carro/index';
import Usuario from './paginas/Usuario/index';
import Login from './paginas/Login/index';
import Blog from './paginas/Blog/Blog';
import Faq from './paginas/Faq/Faq';
import Sobre from './paginas/Sobre/sobre';
import Cadastro from './paginas/Cadastro/index';


function routes () {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Blog}/>
            <Route path="/Carros" component={Carros}/>
            <Route path="/Usuario" component={Usuario}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Blog" component={Blog}/>
            <Route path="/Faq" component={Faq}/>
            <Route path="/Sobre" component={Sobre}/>
            <Route path="/Cadastro" component={Cadastro}/>
        </Switch>
        </BrowserRouter>
    )
}

export default routes;