import React from 'react';
import Data from './characters.json';

class CharacterList extends React.Component{
 
    charDetailLink = (idx) => {
      const Url =  Data[idx].link;  
      console.log(Url)
      
    } 
    
    render(){
       
        return(
            <div>
                <h1>Star Wars: Skywalker Family</h1>
                {Data.map((charDetail, idx)=>{
                    return <div key={idx} className="charDetail">
                             <li>{charDetail.name}</li>
                             <ul><li><button onClick={() => this.charDetailLink(idx)}>Activate Character Details</button></li></ul>
                           </div>
                })}
            </div>
        )
    }
}

export default CharacterList;