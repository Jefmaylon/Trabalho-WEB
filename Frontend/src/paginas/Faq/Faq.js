import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Header from './Header';
import Footer from './Footer';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const data = {
    title: "FAQ ",
    rows: [
        {
            title: "Por que é mais conveniente alugar um carro?",
            content: `Além de ser economicamente interessante, o carro alugado é uma opção de mobilidade que oferece segurança, liberdade e flexibilidade.`,
        },
        {
            title: "Em que países da América Latina posso contar com o serviço de aluguel de carros do SENAI rent a car?",
            content: `A Localiza está presente no Brasil e em 5 países da América Latina sob o nome de Localiza Rent a Car, com mais de 500 agências distribuídas nos 
                    principais aeroportos e cidades da Argentina, Colômbia, Equador, Paraguai e Uruguai.`,
        },
        {
            title: "De acordo com a nova deliberação do Contarn, como funciona a validação da CRLV digital?",
            content: `A versão digital da CRLV disponibilizada para o cliente conta com o QR Code, que será utilizado para a 
                    validação da autenticidade do documento pelas autoridades policiais. `,
        },
        {
            title: "Como são contabilizadas as diárias?",
            content: `A cada 24 horas, é contabilizada uma diária de locação. Caso a devolução do veículo ultrapasse o horário previsto, 
                    a cada hora extra, será cobrada a razão de 1/6 do valor da diária contratada. 
                    Após a sexta hora adicional, será cobrada uma nova diária de locação.
                    Quanto às Proteções Unidas, após a primeira hora de tolerância, será cobrado o valor integral de uma diária da(s) proteção (ões) contratada(s). `,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    arrowColor: "red",
};

const config = {
     animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const sections = [
    { title: '', url: '#' },
    { title: '', url: '#' },
    { title: '', url: '#' },
  
];

function Copyright() {
    return (
      <Typography variant="body2" color="black" align="center">
        {'CONTATO'} <br/>
        {'(47) 3394-2503' } <br/>
        {'senairentacar@gmail.com'} <br/>
      </Typography>
    );
  }

export default function App () {

    return (
        <div>
            <Header title="SENAI-RENT-A-CAR" sections={sections} />
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
            <Copyright />
            <Footer title="SENAI-RENT-A-CAR" description="" />
        </div>

    );
}
