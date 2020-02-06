import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import {Route, Switch,Router} from "react-router";
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import {Login} from './components/Login';
import {NotFound} from './components/NotFound';
import './custom.css';
import history from './Servicos/history';
import PrivateRoute from './Servicos/PrivateRoute';

export default class App extends Component {
  static displayName = App.name;
  
  render () {
    return (
      <Layout>
        <Router history = {history}>
        <Switch>
        <Route exact path='/Login' component={Login} />
        <PrivateRoute exact path='/' component={Home}/>
        <PrivateRoute exact path='/Home' component={Home}/>
        <PrivateRoute exact path='/counter' component={Counter} />
        <PrivateRoute exact path='/fetch-data' component={FetchData} />
        <Route path="*" component={NotFound}/>
        </Switch>
        </Router>
      </Layout>
    );
  }
}
