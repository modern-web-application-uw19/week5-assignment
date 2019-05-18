import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import CharacterPreview from './CharacterPreview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      isLoading: true,
      hasError: false
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=3')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          data: data.results,
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

    const CharacterPreviews = this.state.data.map((pokemon, idx) => {
      return (
        <CharacterPreview pokemon={pokemon} key={idx} idx={idx}/>);
      });

    
    function Home(props) {
      console.log(props);
      return (
        <div>
          <Link to="/about">About</Link>
          <h1>Home</h1>
        </div>
      );
    }
    
    function About() {
      return <h1>About</h1>
    }
    
    function NotFound() {
      return <h1>404</h1>
    }
    
    function Dog(props) {
      console.log(props.match.params);
      return <h1>Dog</h1>;
    }

    return (
      <div>
        {CharacterPreviews}
        <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dogs/:breed" component={Dog} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
