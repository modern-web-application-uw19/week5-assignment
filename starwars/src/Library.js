import React from 'react'
import { Button } from 'semantic-ui-react'

class Library extends React.Component {

   getDisplayName(charcter)
   {
       if (charcter.name)
       {
            return charcter.name;
       }
   }

    render(){        
        const characters = this.props.characters;        
        const listItems = characters.map((charcter, idx) => 
                    <Button fluid key={idx} onClick={()=>this.props.onClick(charcter)} style={{marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5}}>
                        {this.getDisplayName(charcter)}
                    </Button>) 
        return(
            <div>                
                <h2>Star Wars Characters Library</h2>                
                <Button fluid onClick={this.props.getPreviousPage} style={{marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5}}>
                        Previous Page
                </Button>
                <Button fluid onClick={this.props.getNextPage} style={{marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5}}>
                        Next Page
                </Button>
                <hr />
                {listItems}
            </div>
        );
    }
}

export default Library;