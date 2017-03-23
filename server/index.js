var express = require('express')
var app = express()

var React = require('react');

var App = require('../src/index.js');

import { renderToString } from 'react-dom/server';



/*var markup = React.renderComponentToString(
    Item({ initialCount: 7 })
);*/

app.get('/', function (req, res) {
  const appString = renderToString(App.staticHtml.hello);
  res.send(appString);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
