import React from 'react';

function CharacterDetails(props) {

    console.log(props.match.params);

    return <h1>{props.match.params['id']}</h1>

}


export default CharacterDetails;
