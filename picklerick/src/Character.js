import React, { Component } from 'react';
import {CardColumns,Card, CardDeck, CardGroup, CardImg, ListGroup, ListGroupItem, Button,Jumbotron} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

const FA = require('react-fontawesome');


class Character extends Component{

    constructor(props) {
        super(props);

        this.state={
            isFavorite: false,
        };
    }

    likeMe = (isSelect) => {
        this.setState(prevState =>{
            return {
                isFavorite: isSelect
            };
        });
    }

    render() {
        const isLiked = {visibility: 'hidden'};

        const styles = {

            selected: {
                visibility: this.state.isFavorite ? 'visible' : 'hidden'
            },
            media: {
                height: 0,
                paddingTop: '56.25%' // 16:9
            },
            card: {
                position: 'relative',
            },
            overlay: {
                position: 'absolute',
                top: '20px',
                left: '90%',
                color: 'lime',
                backgroundColor: 'transparent',
                padding: '5px',
                borderRadius: '50%',
                border: '2px solid lime'
            }
        };

        const c = this.props.character;

        return (
            <li id={c.id}>
                <Card  style={{width:'18em'}} >
                    {/*onClick={() => {this.props.onClick(c.id)}}*/}
                    <Card.Img variant="top"  src={c.image}/>
                    <div style={styles.selected}>
                        <div style={styles.overlay}>
                            <FA name="heart" className="fa"/>
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Title>{c.name}</Card.Title>
                        <div>
                            {/*<Router>*/}
                                <Link to={"/items/" + c.id}>details</Link>
                                <Link to="/">back</Link>
                            {/*    <Switch>*/}
                            {/*        <Route exact path="/items/:id" component={CharacterDetails} />*/}
                            {/*    </Switch>*/}
                            {/*</Router>*/}
                        </div>
                    </Card.Body>


                </Card>
            </li>
        );

    }

}

export default Character;
