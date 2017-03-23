import React from 'react';
import { render } from 'react-dom';

if (typeof document === 'object') {
  render(<h1>Hello world!</h1>, document.getElementById('root'));
}

const ssr = {
  hello:
  (<div>
    Hello world from react2!
  </div>),
};

export default ssr;
