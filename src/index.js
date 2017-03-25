import React from 'react';
import { render } from 'react-dom';
import ssr from '../src/lib/ssr/index';

if (typeof document === 'object') {
  render(<h1>Hello world 7!</h1>, document.getElementById('root'));
}

ssr.transforms.push(ssr.insertBefore(<nav><ul><li>test2</li></ul></nav>, '#root'));

export default ssr;
