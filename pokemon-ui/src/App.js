import React from "react";
import "./App.css";
import CreatureDetail from "./components/CreatureDetail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Creature from "./components/Creature";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: true,
      hasError: false
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          results: data.results,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          hasError: true,
          isLoading: false
        });
      });
  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    if (this.state.hasError) {
      return <div>Error! Please reload and try again!!</div>;
    }

    // const creatures = this.state.results.map((result, idx) => (
    //   <ul>
    //     <Link to="/CreatureDetail" Component={CreatureDetail}>
    //       {result.name}
    //     </Link>
    //   </ul>
    // ));
    let creatures = this.state.results.map((creature, idx) => {
      return <Creature key={idx} creatureInfo={creature} />;
    });

    return (
      <Router>
        <Switch>
          <Route path="/CreatureDetail/:id" component={CreatureDetail} />
          <div className="CreatureList">
            <ul> {creatures}</ul>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
