import React from 'react';
import Data from './characters.json';
import Character from './character';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
<<<<<<< HEAD
=======

function Char(){
    return <div>{<Character />}</div>
  }
>>>>>>> 38787a7569a361f477bad6de8212013d9a30e9ac


function Char(){
    return <Character  />
  }
 
class CharacterList extends React.Component{
    
    render(){
       
        return(
            <Router>
            <div>
                <h1>Star Wars: Skywalker Family</h1>
                <Router>
                {Data.map((charDetail, idx)=>{
                    return <div key={idx} className="charDetail">
                             <div>{charDetail.name}</div>
<<<<<<< HEAD
                             <div><Link to={`Char/${Data[idx].link}`}>Character Details</Link></div>
                           </div>
                })}
                <switch>
                <Route exact path='Char/:id' component={Char} />
                </switch>
=======
                             <div><button onClick={() => this.charDetailLink(idx)}><Link to='/char'>Activate Character Details</Link></button></div>
                           </div>
                })}
                <switch>
                    <Route exact path='/char' component={Char}/>
                </switch>
                </Router>
>>>>>>> 38787a7569a361f477bad6de8212013d9a30e9ac
            </div>
            </Router>
        )
    }
}

export default CharacterList;