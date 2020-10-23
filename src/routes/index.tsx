import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import  from '../pages/';
import Movies from '../pages/Movies';
import Profile from '../pages/Profile';

//cria roteamento para os filmes e seus detalhes
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Movies} />
    <Route path="/Movie/:id+" component={Profile} />
  </Switch>
);

export default Routes;
