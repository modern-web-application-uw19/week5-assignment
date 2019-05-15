import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router >
        <header>
          <span>
            <Link to={`/`}>Wiki Morty</Link>
          </span>
        </header>
      </Router>


     );
  }
}
 
export default Header;