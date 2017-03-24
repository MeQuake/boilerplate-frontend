import express from 'express';
import React from "react";
import { renderToString } from 'react-dom/server';
import site from '../src/index.js';

const fs = require('fs');

fs.readFile('build/index.html', 'utf8', function (err, html) {
  console.log(err);
  console.log(html);
  var app = express();

  app.use(express.static(process.cwd() + '/build'));

  app.get('/', function (req, res) {
    const appString = renderToString(site.hello);
    res.send(html);
  })

  app.listen(3000, function () {
    console.log('SSR listening on port 3000!')
  })
});
