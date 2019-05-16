import React from 'react';
import './App.css';
import Characters from './Characters';
import { getCharacter } from 'rickmortyapi';
import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import {
  CardColumns,
  Card,
  CardDeck,
  CardGroup,

}  from 'react-bootstrap';

import Logo from './Rick_and_Morty_-_logo_.png';
import Character from "./Character";
import CharacterDetails from "./CharacterDetails";
const FA = require('react-fontawesome');



class App extends  React.Component{

    constructor(props) {
        super(props);

        this.state = {

            data: {},
            isLoading: true,
            hasError: false
        }
    }
    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    data: data.results,
                    isLoading:false
                })
            })
            .catch(error=>
            {
                this.setState({
                    hasError:true,
                    isLoading:false
                });
            })

    }

    render() {
        return (
            <div>
                <Router>
                    <nav className="navbar navbar-dark bg-light">
                        <a className="navbar-brand"><Link to ="/"><FA name="home" className="fa-2x icons"></FA></Link></a>
                        <img src={Logo} height="100"/>
                        <div className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact
                               path="/"
                               render={(props) => <Characters {...props}
                                                              characters={this.state.data}
                                                              isLoading={this.state.isLoading}/>}
                               />
                        <Route exact
                               path="/details/:id"
                               render={(props) => <CharacterDetails {...props} />}
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}




export default App;
