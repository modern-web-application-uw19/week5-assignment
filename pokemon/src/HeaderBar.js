import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './HeaderBar.css';
import WaterPokemon from './WaterPokemon';
import App from './App';

class HeaderBar extends React.Component{
    
  
    render(){

        return(
            <div>
                
                <ul>
                    
                    
                    <li><a href="#contact">Fire</a></li>
                    <li><a href="#about">Electric</a></li>
                </ul>
                
                <hr />
        
            </div>
        );
    }
}
export default HeaderBar;