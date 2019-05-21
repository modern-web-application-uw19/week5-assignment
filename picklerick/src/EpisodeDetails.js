import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';

import {Card} from "react-bootstrap";


class EpisodeDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {

            data: {},
            isLoading: true,
            hasError: false
        }
    }

    componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/episode/${this.props.match.params.id}`)
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
                <div>
                    <Card style={{width:'40rem'}}>
                        <Card.Body>
                            <h4 style={{textAlign:"left"}}>{c.name}</h4>
                            <table>
                                <tbody>
                                <tr><td className="head">Air date:</td><td className="val">{c.air_date}</td></tr>
                                <tr><td className="head">Episode:</td><td className="val">{c.episode}</td></tr>
                                </tbody>
                            </table>
                        </Card.Body>
                        <Link to={`/details/${this.props.match.params.characterId}`} style={{textAlign:"center"}}>
                            <p>back</p>
                        </Link>
                    </Card>
                </div>
            )
        }
    }
}

export default EpisodeDetails;

