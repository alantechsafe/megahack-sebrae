
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Products from "./Products"
import addThemeProvider from '../styles';
import Profile from './Profile/Profile';

const Routes = () => (
  <BrowserRouter>
    {addThemeProvider(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produtos" component={Products} />
        <Route exact path="/perfil" component={Profile} />
      </Switch>
    )}
  </BrowserRouter>
);

export default Routes;
