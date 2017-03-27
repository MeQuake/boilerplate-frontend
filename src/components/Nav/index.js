import React from 'react';
import { render } from 'react-dom';

require("./index.css").basename(__dirname);

var Nav = React.createClass({
  render () {
    return (
      <nav className="Nav">
      </nav>
    );
  }
});

module.exports = Nav;
