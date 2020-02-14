import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import {Route, Switch,BrowserRouter,useHistory} from "react-router-dom";
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Cliente} from './components/Cliente';
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
        <Route exact path='/Login' component={Login} />
        <PrivateRoute exact path='/' component={Home}/>
        <PrivateRoute exact path='/Home' component={Home}/>
        <PrivateRoute exact path='/counter' component={Counter} />
        <PrivateRoute exact path='/fetch-data' component={FetchData} />
        <PrivateRoute exact path='/Cliente' component={Cliente} />
      </Layout>
    );
  }
}
