import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="col-sm-6 col-md-4">
        <Link className="btn" to={`${this.props.section}/${this.props.data.id}`}>
          {this.props.data.image ? <div><img src={this.props.data.image}/></div>: "" }
          <p>{this.props.data.name}<br/>{this.props.data.id} </p>
        </Link>
      </div>
    );
  }
}
 
export default Card;