import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import Character from "./Character";

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

                    <Card style={{width: '30em'}}>
                        <Card.Img variant="top" src={c.image}/>
                        <Card.Body>
                            <Card.Title>{c.name}</Card.Title>
                        </Card.Body>
                    </Card>
                )
            }
        }
    }


export default CharacterDetails;

