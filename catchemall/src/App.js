import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      hasError: false
    }
  }
  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data,
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
      return <div>ERROR, please reload and try again</div>;
    }

    const theResults = (this.state.data.results);
    const top20 = theResults.map((names, idx) => <li key={idx}>{names.name}</li>);

    return (
      <div>
        <ul>
        {top20}
        </ul>
      </div>
    );
  }
}

function Home() {
  return (
    <div className="App">
      
    </div>
  );
}

function NotFound() {
  return <h1>404</h1>
}

function TheRouter() {
  return (
    <div>
      <Router>
        <Link to="/">Home </Link>
        <Link to="/pokemon/:name">Pokemon</Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pokemon/:name" component={Pokemon} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default TheRouter;
