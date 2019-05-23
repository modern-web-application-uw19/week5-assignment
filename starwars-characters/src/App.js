import React from 'react';
import Character from './character'
import './App.css';
import HomeWorld from './homeworld'; 
import CharacterList from './characters';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Home(){
return <div><CharacterList onDetail={this.charDetailLink}/></div>
}

function Char(){
  return <div>{<Character />}</div>
}

function hWorld(){
  return <div>{<HomeWorld />}</div>
}

class App extends React.Component {
  
  render(){
    
    return (
      <div>
        <Router>
          <Link to='/' >Skywalker Family</Link><br />
          <Link to="/hworld">HomeWorld</Link><br />
          <Link to="/char">Character Details</Link>
          <hr />
          <switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/char' component={Char}/>
            <Route exact path='/hworld' component={hWorld}/>
          </switch>
        </Router>
      </div>
    );
  }
}

export default App;
