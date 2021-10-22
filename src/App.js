import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import React from 'react';
import { Intranet } from "./components/Intranet";
import './components/style/intranet.css'


function App() {  

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/'exact>
            <Intranet /> 

          </Route>




        </Switch>      
      </div>
    </Router> 
  
    
  )
}

export default App;
