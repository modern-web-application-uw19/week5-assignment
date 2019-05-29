import React from 'react';
import Data from './characters.json';
import Character from './character';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Char(){
    return <div>{<Character />}</div>
  }

class CharacterList extends React.Component{
 
    charDetailLink = (idx) => {
      const Url =  Data[idx].link;  
      console.log(Url)
      
    } 
    
    render(){
       
        return(
            <div>
                <h1>Star Wars: Skywalker Family</h1>
                <Router>
                {Data.map((charDetail, idx)=>{
                    return <div key={idx} className="charDetail">
                             <div>{charDetail.name}</div>
                             <div><button onClick={() => this.charDetailLink(idx)}><Link to='/char'>Activate Character Details</Link></button></div>
                           </div>
                })}
                <switch>
                    <Route exact path='/char' component={Char}/>
                </switch>
                </Router>
            </div>
        )
    }
}

export default CharacterList;