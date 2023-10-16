import React from 'react';
import './Navbar.css';
import logo from '../images/atstaylogo.webp';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <div className="nav">
            <div className="container-fluid nav-top p-2 d-flex justify-content-between">
                <div className="navtopleft">
                  <i class="fa-brands fa-facebook-f mx-4" style={{color:"black"}}></i> 
                  <i class="fa-brands fa-instagram" style={{color:"black"}}></i>
                  <span className="mx-3" style={{color:"black"}}>support@attravels.in</span>
                </div>

                <div className="navtopright">
                <span className="mx-3" style={{color:"black"}}>9163720198</span>
                <span className="mx-3" style={{color:"black"}}>Login</span>
                <span className="mx-3" style={{color:"black"}}>Signup</span>

                </div>
            </div>

            <div className="navbar container w-75 py-3">
              <div className="logo d-flex">
                <img src={logo} className="logoimg"/>
                
                <div className="nav_item mt-3">
                <ul className="d-flex navitem ">
                  <Link to="/"><li className="mx-4">HOME</li> </Link> 
                 <Link to="/all-tours"> <li className="mx-4">ATTOURS</li>  </Link>
                  <li className="mx-4">ATSTAYS</li>  
                  <li className="mx-4">BLOGS</li>  
                </ul>                
              </div>
              </div>
              

              
            </div>

        </div>

    </div>
  )
}
