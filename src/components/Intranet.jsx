import React from "react";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import { Navbar } from "./Navbar";
import { Links } from "./Links";
import { Benefits } from "./Benefits";
import { Insurance } from "./Insurance";
import {Home} from "./Home";
import { Sidebar } from "./Sidebar";
import './style/intranet.css';



export const Intranet= () =>{
  return(
    <div className="container-intranet">
      <Router>
        <Navbar />
        <Sidebar />
          <Switch>
            <Route path='/links' component={Links}/>
            <Route path='/benefits' component={Benefits}/>
            <Route path='/insurance' component={Insurance}/>
            <Route path='/home' component={Home}/>
          </Switch>
        </Router>        
    </div>
  )
}