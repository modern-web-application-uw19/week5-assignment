import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {Link} from "react-router-dom";
import {Card,CardColumns,Button} from "react-bootstrap";
import Character from "./Character";
import './App.css';

const FA = require('react-fontawesome');

class CharacterDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {

            data: {},
            isLoading: true,
            hasError: false
        }
    }

    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    data: data,
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

            const c = this.state.data;

            if (this.state.isLoading) {
                return <p>Loading...</p>
            } else {

                return (
                    <div className="detail">
                        <CardColumns>
                        <Card style={{width: '500px'}}>
                            <Card.Img variant="top" src={c.image}/>
                            <Card.Text>
                                <div style={{padding: "5px",textAlign: "center"}}>
                                    <Link to={'/'} className="btn btn-primary">
                                        <FA name="arrow-left"/>
                                    </Link>
                                </div>
                            </Card.Text>

                        </Card>

                            <div style={{paddingLeft:"200px"}}>
                                    <h4>{c.name}</h4>
                                    <table>
                                        <tr><td>Species:</td><td>{c.species}</td></tr>
                                        <tr><td>Gender:</td><td>{c.gender}</td></tr>
                                        <tr><td>Origin:</td><td>{c.origin.name}</td></tr>
                                        <tr><td>Location:</td><td>{c.location.name}</td></tr>
                                    </table>

                            </div>

                        </CardColumns>
                    </div>
                )
            }
        }
    }


export default CharacterDetails;

