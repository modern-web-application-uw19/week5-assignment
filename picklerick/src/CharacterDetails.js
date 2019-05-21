import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';
import {Card,CardColumns,ListGroup} from 'react-bootstrap';
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

                let episodes = this.state.data.episode.map( (episode) => <li><Link id={episode.id} to={`/episode/${c.id}/${episode.split('/').slice(-1).pop()}`}>
                    Episode {episode.split('/').slice(-1).pop()}</Link></li>);

                return (
                    <div>

                        <Card style={{width:'19rem',marginLeft:'20%'}}>
                            <Link to={'/'}  style={{textAlign:"center"}}>
                                <img src={c.image} alt={c.name}/>
                                <br />
                                <p>back</p>
                            </Link>

                        <Card.Body>
                            <h4 style={{textAlign:"left"}}>{c.name}</h4>
                            <table>
                                <tbody>
                                    <tr><td className="head">Species:</td><td className="val">{c.species}</td></tr>
                                    <tr><td className="head">Gender:</td><td className="val">{c.gender}</td></tr>
                                    <tr><td className="head">Origin:</td><td className="val">{c.origin.name}</td></tr>
                                    <tr><td className="head">Location:</td><td className="val">{c.location.name}</td></tr>
                                </tbody>
                            </table>
                        </Card.Body>
                        </Card>


                            <div style={{marginTop:"10px"}}>
                                <ul>
                                    {episodes}
                                </ul>
                            </div>


                    </div>
                )
            }
        }
    }

export default CharacterDetails;

