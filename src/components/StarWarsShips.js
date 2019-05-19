import React from "react"
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import StarWarsItem from "./StarWarsItem";

export default class Home extends React.Component {
    constructor(props){
      super(props);
  
    this.state = {
      data: {},
            isLoading: true,
    }
    };
  
      componentDidMount() {
      fetch("https://swapi.co/api/starships/")
      .then(response => { return response.json()})
      .then(data => {this.setState({data:data.results, isLoading: false})})
  }
  
  render(){
    if (this.state.isLoading){
      return <div>Loading...</div>
    }
    else {

    const shipLink = this.state.data.map((item, idx) => 
    {return <li key={idx}>
          <NavLink className="navLinkClass" activeStyle={{color: 'red'}} to={`/StarWarsItem/${idx}`}>{item.name}</NavLink>
            </li>});

    return (
      <div>
        <Router>
          <div className="appClass">
            <h1>Ships Of Star Wars</h1>
            <ul>
              {shipLink}
            </ul>
            <Link className="linkClass" to={"/"}>Clear</Link>
            <Route path="/StarWarsItem/:id" component={StarWarsItem}/>
          </div>
        </Router>
      </div>
    )
  }  
  };
}