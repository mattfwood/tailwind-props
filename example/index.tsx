import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box } from '../.';

const App = () => {
  return (
    <div>
      <Box />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
