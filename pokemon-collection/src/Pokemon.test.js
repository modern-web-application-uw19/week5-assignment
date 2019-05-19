import React from 'react';
import ReactDOM from 'react-dom';
import Pokemon from './Pokemon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pokemon key={1} idx={1} url={"https://pokeapi.co/api/v2/pokemon/1/"} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
