import React from 'react'

class HomeWorld extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          homeWorld: [],
          isLoading: true
        }
      }
    
      componentDidMount(){
        fetch('https://swapi.co/api/planets/1/')
          .then(response => {
          return response.json();
          })
          .then(data => {
            this.setState({
                homeWorld : data,
                isLoading: false,
                hasError: false
              });
          }).catch(error =>{
            this.setState({
              hasError: true,
              isLoading: false
            });
          });
      }
        
render(){
    if (this.state.isLoading) {
        return <div>Loading...</div>
      }
      if (this.state.hasError){
        return <div>The page did not load correctly!</div>
      }
    //   console.log(this.state.homeWorld)
    //  const HomeWorld = Object.values(this.state.homeWorld)
    //  .map((details, idx) => {
    //         return (
    //             <div key={idx}>{details}</div>
    //         )
    //       });
        return(
            <div>
              <div>HomeWorld</div>
              <div>Planet: {this.state.homeWorld.name}</div>
              <div>Climate: {this.state.homeWorld.climate}</div>
              <div>Terrain: {this.state.homeWorld.terrian}</div>
              <div>Diameter: {this.state.homeWorld.diameter} KM</div>
              <div>Orbital Period: {this.state.homeWorld.orbital_period}</div>
              <div>Rotational Perid: {this.state.homeWorld.rotation_period}</div>
              <div>Gravity: {this.state.homeWorld.gravity}</div>
              <div>Population: {this.state.homeWorld.population}</div>      
            </div>

        );
    }
}

export default HomeWorld;