import React from 'react';
import User from './user/step1';
import UpdateUser from './user/step2';

function App() {
  
  if(localStorage.getItem("userid")==null){
    return( <User/> )
  }else{
        return( <UpdateUser/> )
  }
  
}

export default App;
