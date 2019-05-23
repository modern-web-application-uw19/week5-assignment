import React, { Component } from 'react';
import characters from '../../mock/characters.json';
import locations from '../../mock/locations.json';
import episodes from '../../mock/episodes.json';
import CardGrid from '../Shared/CardGrid.js';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
    this.loadMore = this.loadMore.bind(this);
  }
  componentDidMount() {
    fetch(this.props.endpoint)
      .then(response => response.json())
      .then(json => this.setState({
        info: json.info,
        results: json.results, 
        isLoaded: true, 
      }))
      .catch()
  }

  loadMore() {
    if (this.state.info.next != "") {
      fetch(this.state.info.next)
        .then(response => response.json())
        .then(json => this.setState({
          info: json.info,
          results: [
            ...this.state.results,
            ...json.results
          ]
        }))
        .catch()
    }
  }

  render() {
    const loaded = this.state.isLoaded; 
    let content;
    if (loaded) {
      content = <div>
        <h2>{this.props.title} ({this.state.info.count})</h2>
        <div className="row">
          <CardGrid
            key={`${this.props.title}-grid`}
            data={this.state.results}
            section={this.props.title.toLowerCase()}
          />
        </div>
        {this.state.info.next != "" ? 
          <div className="loadmore">
            <button onClick={this.loadMore}>Load More</button>
          </div>
          : ""
        }
      </div>

    } else {
      content = <div>Loading...</div>
    }
    return ( 
      <div>
        {content}       
      </div>
    );
  }
}
 
export default Overview;