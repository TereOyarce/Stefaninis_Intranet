import React from "react";
import { Link } from "react-router-dom";
import './style/sidebar.css';

export const Sidebar= () =>{
  return(
    <div className="container-sidebar">
      <Link to=''>
          <button className="category">GO TO LINKS</button>
          </Link>
    </div>
  )
}