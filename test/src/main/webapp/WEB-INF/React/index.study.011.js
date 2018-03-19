//var React = require('react');
//var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';

function tick1() {
  const element = (
    <div>
      <h1>Hello, kook 1</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
// ----------------------------------------------------

function Clock2(props) {
  return (
    <div>
      <h1>Hello, kook 2</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick2() {
  ReactDOM.render(
    <Clock2 date={new Date()} />,
    document.getElementById('root2')
  );
}

// ====================================================


class Clock3 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, kook 3</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


function tick3() {
  ReactDOM.render(
    <Clock3 date={new Date()} />,
    document.getElementById('root3')
  );
}


// ====================================================
setInterval(tick1, 1000);
setInterval(tick2, 1000);
setInterval(tick3, 1000);