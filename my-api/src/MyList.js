import React, { Component } from "react";
import MyDetail from "./MyDetail.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class MyList extends Component {
  xx = "aaa";
  state = {
    datax: [],
    loading: true,
    info: []
    //xx: "aaa"
  };

  componentDidMount = () => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(data => {
        this.setState({ datax: data.results });
        this.setState({ info: data.info });
        //console.log({ data });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log("Oops!");
      });
  };

  render() {
    let myName = 0;
    let myPic = 0;
    let myGender = 0;
    let myStatus = 0;
    let mySpecies = 0;
    let myData = this.state.datax.map((x, i) => {
      //this.xx = x;
      return (
        <li key={i}>
          <img src={x.image} alt="Oops!" className="MyRoundImage" />

          <Link
            to="/detail"
            onClick={() => {
              myName = x.name;
              myGender = x.gender;
              myPic = x.image;
              myStatus = x.status;
              mySpecies = x.species;
            }}
          >
            {x.name}
          </Link>

          <hr />
          <br />
        </li>
      );
    });
    // return <div>{JSON.stringify(this.state.datax)}</div>;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <ol>{myData}</ol>
            </div>
          </Route>
          <Route
            path="/detail"
            render={props => (
              <MyDetail
                {...props}
                name={myName}
                gender={myGender}
                status={myStatus}
                picture={myPic}
                species={mySpecies}
              />
            )}
          />

          {/* <MyDetail /> */}
          {/* </Route> */}
        </Switch>
      </Router>
    );
  }
}
