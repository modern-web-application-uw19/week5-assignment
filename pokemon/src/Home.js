import React from 'react';
import pic from './image/gif.gif'
class Home extends React.Component{

    render(){

        return(
            <div style={{margin:'auto',textAlign:'center'}}>
                <p style={{textAlign:'center',fontSize:'24px'}}>A Pokemon Reference</p>
                <img src={pic} alt='pic' />
            </div>
        );
    }
}
export default Home;