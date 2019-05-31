import React from 'react';
import Data from './characters.json';
import Character from './character';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


function Char(){
    return <Character  />
  }
 
class CharacterList extends React.Component{
    
    render(){
       
        return(
            <Router>
            <div>
                <h1>Star Wars: Skywalker Family</h1>
                {Data.map((charDetail, idx)=>{
                    return <div key={idx} className="charDetail">
                             <div>{charDetail.name}</div>
                             <div><Link to={`Char/${Data[idx].link}`}>Character Details</Link></div>
                           </div>
                })}
                <switch>
                <Route exact path='Char/:id' component={Char} />
                </switch>
            </div>
            </Router>
        )
    }
}

export default CharacterList;