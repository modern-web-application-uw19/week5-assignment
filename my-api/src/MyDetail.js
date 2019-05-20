import React, { Component } from "react";

export default class MyDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.picture} alt="Oops!" className="MyImage" />
        <span>Name: {this.props.name}</span>
        <br />
        <span>Gender: {this.props.gender}</span>
        <br />
        <span>Status: {this.props.status}</span>
        <br />
        <span>Species: {this.props.species}</span>
      </div>
    );
  }
}
