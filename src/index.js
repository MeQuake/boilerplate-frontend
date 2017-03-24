import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';

if (typeof document === 'object') {
  render(<h1>Hello world!</h1>, document.getElementById('root'));
}

const ssr = [];

ssr.push(function(window){
  // react render component
  const html = renderToString(<div>Hello world from react2!</div>);
  // create dom node
  let template = window.document.createElement('template');
  template.innerHTML = html;
  const node = template.content.firstChild;
  //select target node to insert before
  const target = window.document.querySelector('#root')
  // transform dom
  target.parentNode.insertBefore(node, target);
  return window;
});

export default ssr;
