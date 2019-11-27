import React from 'react';
import { NavLink } from "react-router-dom";

const Navegation = () =>{

    return (
        <nav>
            <ul>
               <li> <NavLink to='/create'>New Photo</NavLink></li>
               <li><NavLink to='/list'>Photo List</NavLink></li>
               <li><NavLink to='/'>Photo Slide</NavLink></li>
            </ul>
        </nav>

    
    );
  }
export default Navegation;



