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
      <div className="App">
        <Header></Header>
        <Grid className='page-content' container justify='center'>
          <Grid className='cards-content' container spacing={2} justify='center'>
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
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
