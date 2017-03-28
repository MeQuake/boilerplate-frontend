/* eslint linebreak-style: ["error", "windows"]*/

import React from 'react';
import postcss from 'postcss';
import { render } from 'react-dom';
import ssr from '../src/lib/ssr/index';

postcss()
.process({ from: 'src/app.css', to: 'build/app.css' })
.then((result) => { console.log(result.css); });

if (typeof document === 'object') {
  render(<h1>Hello world!</h1>, document.getElementById('root'));
}

ssr.transforms.push(ssr.insertBefore(<nav><ul><li>test</li></ul></nav>, '#root'));

export default ssr;
