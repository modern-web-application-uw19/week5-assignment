import React from 'react'
import { Button } from 'semantic-ui-react'

export default class Character extends React.Component {

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

    getAliases(charcter)
    {
        let aliases = "";
        charcter.aliases.forEach(alias => {
            aliases+= alias + ", ";
        });

        return aliases
    }

    getTitles(character)
    {
        let titles = "";
        character.titles.forEach(title=> {
            titles+= title + ", "
        });

        return titles;
    }

    getSeasons(character)
    {
        let seasons = "";
        character.tvSeries.forEach(season=> {
            seasons+= season + ", "
        });

        return seasons;
    }

    render() {
        const character = this.props.selectedItem;        
        return (
            <div>
                <Button fluid onClick={()=>this.props.onClick()} style={{marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5}}>
                        Back to Directory Listing
                </Button>
                <hr />
                <p>
                    Name: {this.getDisplayName(character)}
                </p>
                
                <p>
                    Aliases : {this.getAliases(character)}
                </p>

                <p>
                    PlayedBy : {character.playedBy[0]}
                </p>

                <p>
                    Titles : {this.getTitles(character)}
                </p>

                <p>
                    Appears In : {this.getSeasons(character)}
                </p>
            </div>            
        );
    }
}