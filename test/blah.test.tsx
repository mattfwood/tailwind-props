import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Box } from '../stories/Box.stories';

describe('Box', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Box />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
