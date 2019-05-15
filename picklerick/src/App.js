import React from 'react';
import logo from './logo.svg';
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

    getDetails= (id) => {

        const character = this.state.data.filter( x => {
            return x.id === id
        });



    }

    render() {

        return (

            <div>
                <nav className="navbar navbar-dark bg-light">

                    <a className="navbar-brand">Navbar</a>
                    <img src={Logo} height="100"/>
                    <div className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </div>
                </nav>

                <CardColumns>
                    <Characters isLoading={this.state.isLoading} characters={this.state.data}
                                onSelect={this.getDetails}/>
                </CardColumns>
            </div>
        );

    }
}




export default App;
