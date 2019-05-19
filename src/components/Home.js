import React from "react";
import StarWarsShips from "./StarWarsShips"
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Home extends React.Component {  
  
  render(){

    return (
        <div>
        <Router>
          <Link to="/StarWarsShips">Star War Ships</Link>
          <Route path="/StarWarsShips" component={StarWarsShips} />
        </Router>
        </div>
    )
  }
}
  
  