import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Character from './Character';

class App extends Component{
	
	render(){
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/people/:id" component={Character} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
