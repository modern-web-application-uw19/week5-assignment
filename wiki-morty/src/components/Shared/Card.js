import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="col-sm-6 col-md-4 mb-5">
     
        <Link to={`${this.props.section}/${this.props.data.id}`}>
          <div className="card">
            {this.props.data.image ? <div><img src={this.props.data.image}/></div>: "" }
            <div className="card-body">
              <h4 className="card-title">{this.props.data.name}</h4>
            </div>
          </div>
        </Link>

      </div>
    );
  }
}
 
export default Card;