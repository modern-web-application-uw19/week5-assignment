import React from 'react';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            person: this.props.match.params.id,
            isLoading: false,
            hasError: false
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/')
          .then(response => response.json())
          .then(result => {
            this.setState({ 
                data: result.results[this.state.person],
                isLoading: false
            });
          })
          .catch(error => {
            this.setState({
              hasError: true,
              isLoading: false
            });
          });
    }

    charImg(){
        const charNum = Number(this.state.person)+1;
        const imgURL = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;
        return (
            <img src={imgURL} alt={this.state.person.name}></img>
        )

    };

    render() {

        if (this.state.isLoading) {
            return <div>loading</div>
        }      
        if (this.state.hasError){
            return <div>DID NOT LOAD!</div>
        }        
        


        return(
            <div className="characterBox">
                <h1>Character Details</h1>
                    {this.charImg()}
                <ul>
                    <li><h1>Name: {this.state.data.name}</h1></li>
                    <li>Born: {this.state.data.birth_year}</li>
                    {/* <li>Age:{calcAge}</li> */}
                    <li>Height: {this.state.data.height}</li>
                    <li>Mass: {this.state.data.mass}</li>
                </ul>
            </div>
        );
    }
}