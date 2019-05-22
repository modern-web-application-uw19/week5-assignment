import React from 'react';
import CharacterListItem from './CharacterListItem';

class CharacterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            characterList: {},
        }
    }

    componentDidMount() {    
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(characterList => {
            this.setState({
                isLoading: false,
                characterList: characterList.results 
            });
        })        
    }

    render() {
        const characters = Object.entries(this.state.characterList)
        .map((key) => 
            <CharacterListItem 
                name={key[1].name} 
                id={key[1].id} 
                img={key[1].image    
                }
            />);        

        return(
            <div className="list-page">
                <h1 className="list-title">Rick and Morty</h1>
                <ul className="character-list">
                    {characters}
                </ul>
            </div>

        );
    }
} 

export default CharacterList;