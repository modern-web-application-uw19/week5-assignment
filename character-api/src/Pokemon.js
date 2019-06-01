import React from 'react';
import './Pokemon.css';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
      static propTypes = {
        name: PropTypes.string.isRequired,
        pokeIdx: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired
      }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pokeIdx: '',
            url: ''
        }
    }

    componentDidMount() {
        //const { name, pokeIdx, url } = this.props;
    //console.log(this.props.name)
        this.setState({
            name: this.props.name,
            idx: this.props.pokeIdx+1,
            url: this.props.url
        });
    }

    render () {
        const idx = this.state.idx;
        //const imgUrl = `http://pokeapi.co/media/sprites/pokemon/{this.state.pokeIdx}.png`;
        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`;
        //console.log(idx)

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        return (
            <div className="pokemon">
                <img src={imgUrl} alt={this.state.name} />
                <h3>
                    {capitalizeFirstLetter(this.state.name)}
                </h3>
                <h3>
                    No. {idx}
                </h3>
            </div>
        );
    }
}

export default Pokemon;