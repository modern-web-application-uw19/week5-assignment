import React, { Component } from "react";

export default class MyList extends Component {
  state = {
    datax: [],
    loading: true
  };
  xx = [1, 2, 3, 4, 5, 6, 7];
  componentDidMount = () => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(data => {
        this.setState({ datax: data.results });
        console.log({ data });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log("Oops!");
      });
  };

  render() {
    let myData = this.state.datax.map((x, i) => {
      return (
        <li key={i}>
          <img src={x.image} alt="Oops!" className="MyRoundImage" />
          <a href="#.">
            {" "}
            <span>{x.name}</span>
          </a>
          <hr />
          <br />
        </li>
      );
    });
    // return <div>{JSON.stringify(this.state.datax)}</div>;
    return (
      <div>
        <ul>{myData}</ul>
      </div>
    );
  }
}
