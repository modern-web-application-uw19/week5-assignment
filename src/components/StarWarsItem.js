import React from 'react';
export default class StarWarsItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            isLoading: true,
        }
    };

    componentDidMount() {
        fetch("https://swapi.co/api/starships/")
            .then(response => { return response.json() })
            .then(data => { this.setState({ data: data.results, isLoading: false }) })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        const shipId = this.props.match.params.id;
        const selectedShip = this.state.data.map((item, idx) => {
            if (shipId == idx) {
                return (
                    <div>
                        <h2 className="appClass">{item.name}</h2>
                        <h3 className="appClass">Class: {item.starship_class}</h3>
                        <h3 className="appClass">Crew: {item.crew}</h3>
                        <h3 className="appClass">Passengers: {item.passengers}</h3>
                        <h3 className="appClass">Manufacturer: {item.manufacturer}</h3>
                    </div>
                );
            }

        })

        return selectedShip
    }
}
