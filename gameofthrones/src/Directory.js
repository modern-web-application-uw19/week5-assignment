import React from 'react'
import { Button } from 'semantic-ui-react'

class Directory extends React.Component {

   getDisplayName(charcter)
   {
       if (charcter.name)
       {
            return charcter.name;
       }
       else
       {
           if (charcter.aliases[0])
           {
               return charcter.aliases[0];
           }
           else
           {
               return 'Name Unknown';
           }

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
                <h2>Game Of Thrones Directory of Characters</h2>                
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

export default Directory;