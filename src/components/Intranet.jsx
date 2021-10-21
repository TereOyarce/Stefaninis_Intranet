import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import './style/navbar.css';



export const Intranet= () =>{
  return(
    <div>
      <Navbar/>
      <Sidebar/>      
    </div>
  )
}