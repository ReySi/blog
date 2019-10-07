import React from 'react';
import './App.css';
import Header from './components/header/Header';
import theme from './ui/theme';
import { MuiThemeProvider, Grid } from '@material-ui/core';
import ArticleCard from './components/articleCard/ArticleCard';
import './App.css';
const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <Header></Header>
        <div className='page-content'>
          <Grid className='card-content' container spacing={0} justify='center' xs={12}>
            <Grid item sm={4} md={3} lg={2}>
              <ArticleCard></ArticleCard>
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <ArticleCard></ArticleCard>
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <ArticleCard></ArticleCard>
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <ArticleCard></ArticleCard>
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <ArticleCard></ArticleCard>
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <ArticleCard></ArticleCard>
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <ArticleCard></ArticleCard>
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <ArticleCard></ArticleCard>
            </Grid>
            <Grid item sm={4} md={3} lg={2}>
              <ArticleCard></ArticleCard>
            </Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
