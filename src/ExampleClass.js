import React from 'react';

class Example extends React.Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        <p>Você clicou {this.state.count} vezes</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clique aqui
        </button>
      </div>
    );
  }
}

export default Example;
