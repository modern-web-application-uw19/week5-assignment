import React from 'react';
import ReactDOM from 'react-dom';
import CharacterDetails from './CharacterDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharacterDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
