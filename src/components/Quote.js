import React, { Component } from 'react';

import QuoteContext from '../context/QuoteContext';

class Quote extends Component {
  render() {
    const { quote, author } = this.context;

    return (
      <section>
        <h4>Quote</h4>
        <div>
          <q>{ quote }</q>
          <p><em>{ `by ${author}` }</em></p>
        </div>
      </section>
    );
  }
}

Quote.contextType = QuoteContext;

export default Quote;
