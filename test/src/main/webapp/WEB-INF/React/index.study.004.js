var React = require('react');
var ReactDOM = require('react-dom');

function Welcome() {
  return <h1>Hello, kook</h1>;
}

function Welcome2(a2) {
  return <h1>Hello, {a2}</h1>;
}

const ccc = (<h1>Hello, kook3</h1>);

function Welcome4(props) {
  return <h1>Hello, {props.name}</h1>;
}

const user = {
  firstName : 'Lee',
  name : 'Kook Hyun 4'
}


class Welcome5 extends React.Component {
  render() {
    return (
      <h1>hello, kook5</h1>

    );
  }
}



ReactDOM.render(Welcome(), document.getElementById('root'));
ReactDOM.render(Welcome2('kook2'), document.getElementById('root2'));
ReactDOM.render(ccc, document.getElementById('root3'));
ReactDOM.render(Welcome4(user), document.getElementById('root4'));
ReactDOM.render(<Welcome5 />, document.getElementById('root5'));
