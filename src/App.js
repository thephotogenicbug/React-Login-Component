import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import User from './user/step1';
import UpdateUser from './user/step2';
import Login from './user/login';

const Home = () => <h1>Welcome Home, {localStorage.getItem("name")}</h1>
function App() {

  return(
    <HashRouter>
      <Route exact path="/" component={User}/>
      <Route exact path="/update-info" component={UpdateUser}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/home" component={Home}/>
    </HashRouter>
  )

 
  
}

export default App;
