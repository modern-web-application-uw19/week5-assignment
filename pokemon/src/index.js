import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Notfound from './Notfound';
import * as serviceWorker from './serviceWorker';
import Home from './Home';
import WaterPokemon from './WaterPokemon';
import FirePokemon from './FirePokemon';
import ElectricPokemon from './ElectricPokemon';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './HeaderBar.css';

const routing = (
    <Router>
        <div>
            <ul style={{minWidth:'800px'}}>
                <li style={{width:'15%',height:'25px'}}>
                    <h1 className='title'>Pokemon Plus!</h1>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/water">Water Pokemon</Link>
                </li>
                <li>
                    <Link to="/fire">Fire Pokemon</Link>
                </li>
                <li>
                    <Link to="/electric">Electric Pokemon</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home} />
                
                <Route path="/water/:id?" component={WaterPokemon}/>
                <Route path="/fire/:id?" component={FirePokemon}/>
                <Route path="/electric/:id?" component={ElectricPokemon}/>
                <Route component={Notfound}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
