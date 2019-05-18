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
import ButtonGroup from "react-bootstrap/es/ButtonGroup";
const FA = require('react-fontawesome');



class App extends  React.Component{

    constructor(props) {
        super(props);

        this.state = {

            info: {},
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
                    info: data.info,
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

    fetchNextResultSet = (e) => {
        const searchString = document.getElementById('txtSearchString');

        let url;
        if (e.currentTarget.id === 'next'){
            if (this.state.info.next != ""){
                url=this.state.info.next;
            }
        }
        else if(e.currentTarget.id === 'prev'){
            if (this.state.info.prev != ""){
                url=this.state.info.prev;
            }
        }
        else if(e.currentTarget.id === 'last'){
            url=`https://rickandmortyapi.com/api/character/?page=${this.state.info.pages}`;
        }
        else if(e.currentTarget.id === 'first'){
            url="https://rickandmortyapi.com/api/character/?page=1";
        }
        else if(e.currentTarget.id ==='btnSearch'){
            if (searchString.value !=""){
                url=`https://rickandmortyapi.com/api/character/?name=${searchString.value}`;
            }
        }

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    info: data.info,
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
                    <nav className="navbar navbar-dark" style={{backgroundColor:"#282c34",paddingBottom:'20px'}}>
                        <div className="App-header">
                            <ButtonGroup>
                                <button  id="first" onClick={this.fetchNextResultSet} className="btn btn-outline-primary my-2 my-sm-0 navbutton">
                                    <FA name="arrow-circle-left"/>
                                </button>
                                <button  id="prev" onClick={this.fetchNextResultSet} className="btn btn-outline-primary my-2 my-sm-0 navbutton">
                                    <FA name="arrow-left"/>
                                </button>
                                <button  id="next" onClick={this.fetchNextResultSet} className="btn btn-outline-primary my-2 my-sm-0 navbutton">
                                    <FA name="arrow-right"/>
                                </button>
                                <button  id="last" onClick={this.fetchNextResultSet} className="btn btn-outline-primary my-2 my-sm-0 navbutton">
                                    <FA name="arrow-circle-right"/>
                                </button>
                            </ButtonGroup>
                        </div>
                        <img src={Logo} height="100"/>
                        <div className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search by name" id="txtSearchString" aria-label="Search"/>
                            <button className="btn btn-outline-primary my-2 my-sm-0" onClick={this.fetchNextResultSet} id="btnSearch">Search</button>
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
