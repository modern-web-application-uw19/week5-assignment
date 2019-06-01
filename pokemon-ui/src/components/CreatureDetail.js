import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./CreatureDetail.css";
class CreatureDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      goBack: () => {},
      isLoading: true,
      hasError: false
    };
  }

  componentDidMount() {
    const creatureDetailURL = this.props.location.state.creatureInfo.url;
    fetch(creatureDetailURL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(this.props);
        this.setState({
          data: {
            height: data.height,
            weight: data.weight,
            name: data.name,
            order: data.order,
            totalAbility: data.abilities.length
          },
          goBack: this.props.history.goBack,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          hasError: true
        });
      });
  }

  render() {
    if (this.state.hasError) {
      return <div>Error Occured ! Please try again !</div>;
    }
    if (this.state.isLoading) {
      return <div>Loading !</div>;
    }
    const { name, height, weight, order, totalAbility } = this.state.data;
    return (
      <div className="creatureDetail">
        <div>Name : {name}</div>
        <div>Height : {height}</div>
        <div>Weight : {weight}</div>
        <div>Order : {order}</div>
        <div>Abilities Count : {totalAbility}</div>

        <Button
          variant="primary"
          onClick={this.state.goBack}
          title="Go back from this HomeScreen"
        >
          Go to Home Page
        </Button>
      </div>
    );
  }
}

export default CreatureDetail;
