import express from 'express';
import React from "react";
import { renderToString } from 'react-dom/server';
import site from '../src/index.js';

var app = express();
app.get('/', function (req, res) {
  const appString = renderToString(site.hello);
  res.send(appString);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
