import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      isLoaded: false
    }
  }
  
  componentDidMount() {
    const path = this.props.match.url.split('/');
    let type = path[1].slice(0,-1)
    fetch(`https://rickandmortyapi.com/api/${type}/${path[2]}`)
    .then(response => response.json())
    .then(json => this.setState({
      result: json,
      type: type,
      isLoaded: true
    }))
    .catch()
  }



  render() { 
    const isLoaded = this.state.isLoaded;
    let content;
    if (!isLoaded) {
      content = <div>Loading....</div>
    } else {
      if (this.state.type == 'character') {
        content = 
          <div className="row">
            <div className="col-sm-6">
              <h1>{this.state.result.name}</h1>
              <h2>{this.state.result.species} | {this.state.result.status}</h2>
              <p>Appears in {this.state.result.episode.length} {this.state.result.episode.length > 1 ? "Episodes" : "Episode"}</p>
            </div>
            <div className="col-sm-6">
              <img src={this.state.result.image} />
            </div>
          </div>
      } else if (this.state.type == 'location') {
        content = 
          <div className="row">
            <div className="col-12">
              <h1>{this.state.result.name}</h1>
              <h2>Dimension: {this.state.result.dimension} 
              <br/>type: {this.state.result.type}</h2>
            </div>
          </div>
      } else if (this.state.type == 'episode') {
        content = 
          <div className="row">
            <div className="col-12">
              <h1>{this.state.result.name}</h1>
              <h2>{this.state.result.episode}</h2>
              <h3>First Aired: {this.state.result.air_date}</h3>
            </div>
          </div>
      }
    }
    return (
      <div className="d-flex flex-sm-row">
        {content}
      </div>
    );
  }
}
 
export default Detail;