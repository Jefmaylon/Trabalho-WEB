import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Alugue seu carro', url: '/carros' },
  { title: 'Cadastrar carro', url: '/Cadastro' },
  { title: 'Sobre', url: '/Sobre' },
  { title: 'FAQ', url: '/Faq' },
  

];

const mainFeaturedPost = {
  title: 'A maior plataforma de aluguel da América Latina',
  description:
    "Alugue o seu carro sem sair do conforto da sua casa, deixe que nós fizemos isso para você.",
  image: 'https://wallpapercave.com/wp/wp2430837.jpg',
  imgText: 'Porsche',
  //linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Huracán recebe prêmio da revista Robb Report ',
    date: '',
    description:
      'Lamborghini Huracán EVO com tração traseira (RWD) Spyder recebeu o prêmio de “Melhor Conversível para 2021” da Robb Report, a prestigiosa revista americana de estilo de vida de luxo...',
    image: 'https://images.alphacoders.com/986/986063.jpg',
    imageText: 'Lamborghini',
  },
  {
    title: 'Honda Civic Type R 2022: projeção antecipa design da nova geração',
    date: '',
    description:
      'Depois de apresentar as versões sedã e hatchback, a Honda se programa agora para lançar a nova geração do Civic na variante esportiva Type R. O modelo já foi flagrado por diversas vezes rodando em testes...',
    image: 'https://cdn.motor1.com/images/mgl/ZobwZ/s1/next-gen-honda-civic-type-renderings.jpg',
    imageText: 'Civic',

  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: '',
  description:
    'Trabalho React em Programação WEB',
   
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Jefferson', icon: FacebookIcon },
    { name: 'Ricardo', icon: FacebookIcon },
    { name: 'Rafael', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="SENAI-RENT-A-CAR" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="SENAI-RENT-A-CAR" description="" />
    </React.Fragment>
  );
}
