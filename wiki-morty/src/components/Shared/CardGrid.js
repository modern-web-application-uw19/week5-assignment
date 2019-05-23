import React, { Component } from 'react';
import Card from './Card';


class CardGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    const data = () => {
      if (this.props.limit) {
        return this.props.data.slice(0, this.props.limit);
      } else {
        return this.props.data;
      }
    }
    return (  
      data().map( (item,index) => (
        <Card
          key={item.id}
          data={item}
          section={this.props.section}
        />
      )
    )
  )}
}
 
export default CardGrid;