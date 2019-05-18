import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';

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

                        <div >
                            <Link to={'/'}>
                            <img src={c.image} alt={c.name}/>
                            <br />
                            <p>back</p>
                            </Link>
                        </div>
                            <div>
                                <h4 style={{textAlign:"left"}}>{c.name}</h4>
                                <table>
                                    <tbody>
                                        <tr><td className="head">Species:</td><td className="val">{c.species}</td></tr>
                                        <tr><td className="head">Gender:</td><td className="val">{c.gender}</td></tr>
                                        <tr><td className="head">Origin:</td><td className="val">{c.origin.name}</td></tr>
                                        <tr><td className="head">Location:</td><td className="val">{c.location.name}</td></tr>
                                    </tbody>
                                </table>
                            </div>

                    </div>
                )
            }
        }
    }

export default CharacterDetails;

