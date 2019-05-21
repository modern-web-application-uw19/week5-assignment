import React from 'react';
import characters from './static.json';
import Character from './Character';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="b">Star Wars Characters</div>
                <div>
                    {characters.map((character, i) => <Character key={i} {...character} />)}
                </div>
            </div>
        );
    }
}

export default Home;