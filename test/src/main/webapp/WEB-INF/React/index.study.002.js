var React = require('react');
var ReactDOM = require('react-dom');


function formatName(aa) {
  return aa.firstName + ' ' + aa.lastName;
}

const user = {
  firstName : 'Lee',
  lastName : 'Kook Hyun'
};

const el = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  el, document.getElementById('root')
);