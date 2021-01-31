import React, { Component } from 'react';
import './App.css';
import ShoppingList from './shopping-list-component/shopping-list';
import Login from './login-component/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
  
    return (
      <Router>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route exact path="/shopping" component={ShoppingList}/>
            <Route component={Login} />
          </Switch>
      </Router>
    );
  }
}

export default App;






