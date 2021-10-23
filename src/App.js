import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import React from 'react';
import { Intranet } from "./components/Intranet";
import { Searchbar } from "./components/Searchbar";


function App() {  
  

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/'exact>
            <Intranet searchbar={Searchbar} /> 
          </Route>
        </Switch>      
      </div>
    </Router> 
  
    
  )
}

export default App;
