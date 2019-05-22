import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class CharacterListItem extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        id: PropTypes.number,
    }

    render() {
        const linkPath=`/character/${this.props.id}`;
        return(
            <div className="list-item-container">
               <Link to={linkPath}>
                    <li className="list-item">{this.props.name}</li>
                    <img className="list-image" src={this.props.img}/>
               </Link>
            </div>
        );
    }
}

export default CharacterListItem;