import express from 'express';
import React from "react";
import site from '../src/index.js';
import jsdom from "jsdom";

const fs = require('fs');

// Load neutrino build with filesystem
fs.readFile('./build/index.html', 'utf8', function (err, html) {
  // parse html file into a DOM to allow for selectors, append, prepend
  jsdom.env(html, function(err, window) {
    // apply site transforms, an array of callbacks that contain
    var transformed;
    site.transforms.forEach(function(transform){
      transformed = transform(window);
    });
    // start serving express
    var app = express();
    app.use(express.static(process.cwd() + '/build'));

    app.get('/ssr', function (req, res) {
      res.send(transformed.document.documentElement.innerHTML);
    })

    app.listen(3000, function () {
      console.log('SSR listening on port 3000!')
    })
  });
});
