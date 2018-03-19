var React = require('react');
var ReactDOM = require('react-dom');

function Welcome(props) {
  return <h1>hello, {props.name}</h1>;
}

const ele  = <Welcome name="kook1" />;

function App() {
  return(
    <div>
      <Welcome name='kook2-1' />
      <Welcome name='kook2-2' />
      <Welcome name='kook2-3' />
    </div>
  );
}

ReactDOM.render(
  ele,
  document.getElementById('root')
);

ReactDOM.render(
  // App(),
  <App />,
  document.getElementById('root2')
);


