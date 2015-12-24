import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return <select><option>{1}{2}</option></select>
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);