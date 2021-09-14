import React from 'react';
import './Menu.css';

import {
  Link
} from "react-router-dom";

function Menu () {
  return (
    <header className="container">
    <nav className="navbar navbar-expand-lg">
		    <div className="container-fluid menu-container">
            <Link to="/"  className="navbar-brand" rel="home">CMS</Link>
		        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		            <span className="fa fa-bars"></span>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/users" className="nav-link">Users</Link>
                </li>
                <li className="nav-item">
                  <Link to="/posts" className="nav-link">Posts</Link>
                </li>
              </ul>
		        </div>
		    </div>
		</nav>
    </header>
  );
}
export default Menu;
