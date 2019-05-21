import React from 'react';
import './App.css';
import Characters from './Characters';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Logo from './Rick_and_Morty_-_logo_.png';
import CharacterDetails from "./CharacterDetails";
import EpisodeDetails from './EpisodeDetails';
import ButtonGroup from "react-bootstrap/es/ButtonGroup";
import {  Link} from 'react-router-dom';
const FA = require('react-fontawesome');


/**
 * Respond to clear event in the search box
 */
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    componentDidMount() {
        this.input.current.addEventListener('search', this.onSearch);
    }

    onSearch = () => {
        window.location.href = "/";
    }

    render() {
        return (
            <div>
                <input className="form-control mr-sm-2" type="search" placeholder="Search by name" id="txtSearchString" aria-label="Search" ref={this.input} />
            </div>
        )
    }
}


class App extends  React.Component{

    constructor(props) {
        super(props);

        this.state = {

            info: {},
            data: {},
            isLoading: true,
            hasError: false,
            total:0
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
            if (this.state.info.next !== ""){
                url=this.state.info.next;
            }
        }
        else if(e.currentTarget.id === 'prev'){
            if (this.state.info.prev !== ""){
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
            if (searchString.value !==""){
                url=`https://rickandmortyapi.com/api/character/?name=${searchString.value}`;
            }
        }

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {

                if (data.results.length > 0) {

                    this.setState({
                        info: data.info,
                        data: data.results,
                        isLoading: false
                    })
                }
            })
            .catch(error=>
            {
                this.setState({
                    hasError:true,
                    isLoading:false
                });
            })
    }

    fetchRandomResult= (e) => {

        const info = {
                "count": this.state.info.count,
                "pages": 1,
                "next": "https://rickandmortyapi.com/api/character/?page=1",
                "prev": "https://rickandmortyapi.com/api/character/?page=1"
        };

        let ids=[];
        for(let i=0;i<7;i++){
            ids.push(Math.floor(Math.random() * this.state.info.count) + 1 );
        }

        let url = `https://rickandmortyapi.com/api/character/${ids.join(',')}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {

                if (data.length > 0) {

                    this.setState({
                        info: info,
                        data: data,
                        isLoading: false
                    })
                }
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
                                <button  id="first" onClick={this.fetchNextResultSet} title="First Page" className="btn btn-outline-primary my-2 my-sm-0 navbutton">
                                    <FA name="arrow-circle-left"/>
                                </button>
                                <button  id="prev" onClick={this.fetchNextResultSet} title="Previous Page" className="btn btn-outline-primary my-2 my-sm-0 navbutton">
                                    <FA name="arrow-left"/>
                                </button>
                                <button  id="rand" onClick={this.fetchRandomResult} title="Random characters" className="btn btn-outline-primary my-2 my-sm-0 navbutton">
                                    <FA name="random"/>
                                </button>
                                <button  id="next" onClick={this.fetchNextResultSet} title="Next Page" className="btn btn-outline-primary my-2 my-sm-0 navbutton">
                                    <FA name="arrow-right"/>
                                </button>
                                <button  id="last" onClick={this.fetchNextResultSet} title="Last Page" className="btn btn-outline-primary my-2 my-sm-0 navbutton">
                                    <FA name="arrow-circle-right"/>
                                </button>
                            </ButtonGroup>
                        </div>
                        <Link to="/">
                            <img title="Back" src={Logo} height="100" alt="logo"/>
                        </Link>
                        <div className="form-inline">
                            <SearchBox />
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
                        <Route exact
                               path="/episode/:characterId/:id"
                               render={(props) => <EpisodeDetails {...props}  />}
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}




export default App;
