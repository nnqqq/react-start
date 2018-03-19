var React = require('react');
var ReactDOM = require('react-dom');

class Hello extends React.Component {
  render() {
    return(
      <div className='container'>Hello {this.props.name}</div>
    );
  }
}

ReactDOM.render(<Hello name='React' />, document.getElementById('root'));
//ReactDOM.render(<Hello name='React' />, document.querySelector('#root'));