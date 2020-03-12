import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home';
import Dashboard from './components/dashboard';
import About from './components/about';
import Header from './components/header';
import Counters from './components/counters';
import User from './components/user/user';
import UserList from './components/user/userList';
class App extends Component {
  state = {  
    counters : [
        { id:1, value:4 },
        { id:2, value:0 },
        { id:3, value:0 },
        { id:4, value:0 }
    ]
};

handleDelete = (counterId) => {
  const counters = this.state.counters.filter(c=>c.id!==counterId);
  this.setState({
      counters
  })
}

handleReset = () => {
const counters = this.state.counters.map(c=>{
    c.value=0;
    return c;
});
this.setState({counters});
}
handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}
render() { 

  return (
    <Router>
      <div>
        <Header/>
      </div>
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/counters">
          <Counters />
        </Route>       
        <Route path="/user-list" component={UserList}/>         
         <Router path="/user">
          <User/>
        </Router> 
      
      </Switch>
    </div>
  </Router>
  );
}
}

export default App;
