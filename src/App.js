import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home';
import Dashboard from './components/dashboard';
import About from './components/about';
import Header from './components/header';
import Counters from './components/counters';
import AddUser from './components/user/user-add';
//import UserList from './components/user/userList';
import Prompt from './components/functional-component';
import MyDataBase from './components/myDatabase';
import CreateUser from "./components/reactstrap/CreateUser";
import UserList from "./components/reactstrap/UserList";
import EditUser from './components/reactstrap/EditUser';

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
        <Route path="/add-user" component={AddUser}></Route>
        <Route path="/functional-component" component={Prompt}></Route>
        <Route path="/my-database" component={MyDataBase}></Route>

        <Route path="/create-user" component={CreateUser}></Route>
        <Route path="/all-users" component={UserList}></Route>
        <Route path='/edit/:id' component={EditUser} /> 

        
      
      </Switch>
    </div>
  </Router>
  );
}
}

export default App;
