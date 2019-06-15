import React from 'react'
import { Button } from 'semantic-ui-react'

export default class Character extends React.Component {

    render() {
        const character = this.props.selectedItem;        
        return (
            <div>
                <Button fluid onClick={()=>this.props.onClick()} style={{marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5}}>
                        Back to Library Listing
                </Button>
                <hr />
                <p>
                Name: {character.name}
                </p>
                
                <p>
                Height : {character.height}
                </p>

                <p>
                Mass : {character.mass}
                </p>

                <p>
                Hair color : {character.hair_color}
                </p>

                <p>
                Birth year : {character.birth_year}
                </p>
            </div>            
        );
    }
}