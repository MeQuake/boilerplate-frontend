import express from 'express';
import React from "react";
import site from '../src/index.js';
import jsdom from "jsdom";
import tidy from "htmltidy";

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

    app.get('/', function (req, res) {
      tidy.tidy(transformed.document.documentElement.innerHTML, {doctype: 'html5',hideComments: false, indent: true},
      function(err, html) {
        res.send(html);
      });
    });

    app.use(express.static(process.cwd() + '/build'));

    app.listen(3000, function () {
      console.log('SSR listening on port 3000!\nMake sure you are not viewing a static page')
    })
  });
});
