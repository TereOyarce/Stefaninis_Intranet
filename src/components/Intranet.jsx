import React from "react";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import { Navbar } from "./Navbar";
import { Links } from "./Links";
import { Benefits } from "./Benefits";
import { Insurance } from "./Insurance";
import { Sidebar } from "./Sidebar";
import './style/navbar.css';



export const Intranet= () =>{
  return(
    <div>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/links' component={Links}/>
            <Route path='/benefits' component={Benefits}/>
            <Route path='/insurance' component={Insurance}/>
          </Switch>
        </Router>        
    </div>
  )
}