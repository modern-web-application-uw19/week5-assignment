import React, { Component } from 'react';
import CharacterItem from './CharacterItem.js';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CharacterList extends Component {
    render() {
        const characters = this.props.characterList.map((character, idx) => {
        return (
            <Link className="char-url" to={character.name}><CharacterItem key={idx} characterItem={character.name}/></Link>
        )});
        
        /*
            Recieved two errors here that i am unsure how to resolve. The issue with key is especially confusing because I have included key as a prop for CharacterItem.
            Can you give advice on how to resolve the following errors?

            index.js:1375 Warning: Failed prop type: The prop `to` is marked as required in `Link`, but its value is `undefined`.
                in Link (at CharacterList.js:10)
                in CharacterList (at App.js:30)
                in div (at App.js:28)
                in App (created by Context.Consumer)
                in Route (at Router.js:10)
                in Switch (at Router.js:9)
                in Router (created by BrowserRouter)
                in BrowserRouter (at Router.js:8)
                in Router (at src/index.js:7)

            index.js:1375 Warning: Each child in a list should have a unique "key" prop.
                Check the render method of `CharacterList`. See https://fb.me/react-warning-keys for more information.
                    in Link (at CharacterList.js:10)
                    in CharacterList (at App.js:30)
                    in div (at App.js:28)
                    in App (created by Context.Consumer)
                    in Route (at Router.js:10)
                    in Switch (at Router.js:9)
                    in Router (created by BrowserRouter)
                    in BrowserRouter (at Router.js:8)
                    in Router (at src/index.js:7)

        */

        return (
            <div className="char-wrap">
                <div>{characters}</div>
            </div>
        )
    }
}

CharacterList.propTypes = {
    characterList: PropTypes.array,
    to: PropTypes.string
  };
