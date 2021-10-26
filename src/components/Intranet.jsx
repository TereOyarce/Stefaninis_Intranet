import React from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import { Navbar } from "./Navbar";
import { Links } from "./Links";
import { Benefits } from "./Benefits";
import { Insurance } from "./Insurance";
import { Sidebar } from "./Sidebar";
import{Profile} from "./Profile";
import {Calendar} from "./Calendar";
import {Vacancies} from "./Vacancies";
import './style/intranet.css';
import { Auth } from "./Auth";


export const Intranet= () =>{
  return(
    <div className="container-intranet">
      <Router>
        <Navbar />
        <Sidebar />
          <Switch>
            <Route path='/vacancies' component={Vacancies}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/links' component={Links}/>
            <Route path='/benefits' component={Benefits}/>
            <Route path='/insurance' component={Insurance}/>
            <Route path='/auth' component={Auth}/>
          </Switch>
        </Router>        
    </div>
  )
}