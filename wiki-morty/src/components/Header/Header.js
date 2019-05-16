import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router >
        <header className="py-3">
          <div className="container">
            <div className="d-flex justify-content-between">
              <span>
                <Link to={`/`}>Wiki Morty</Link>
              </span>
              <nav>
                <ul className="d-flex flex-row">
                  <li><Link to={'/characters'}>Characters</Link></li>
                  <li><Link to={'/locations'}>Locations</Link></li>
                  <li><Link to={'/episodes'}>Episodes</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </Router>


     );
  }
}
 
export default Header;