import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import User from './user/step1';
import UpdateUser from './user/step2';
import Login from './user/login';


function App() {
  
  return(
    <HashRouter>
      <Route exact path="/" component={User}/>
      <Route exact path="/update-info" component={UpdateUser}/>
      <Route exact path="/login" component={Login}/>
    </HashRouter>
  )

 
  
}

export default App;
