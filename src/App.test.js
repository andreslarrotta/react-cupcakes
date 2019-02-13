import React from 'react';
import ReactDOM from 'react-dom';
import Formone from './Formone';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Formone />, div);
  ReactDOM.unmountComponentAtNode(div);
});
