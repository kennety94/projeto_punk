import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Brewery from './containers/Brewery/Brewery';
import BeerDetail from './containers/BeerDetail/BeerDetail';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Brewery} />
      <Route exact path='/beer-detail/:beerId' component={BeerDetail} />
    </Switch>
  );
}

export default App;
