import React, { Component } from 'react';
import QuoteContext from './QuoteContext';

class QuoteProvider extends Component {
  state = {
    quote: '',
    author: '',
  }

  sendQuote = ({ quote, author }) => {
    this.setState({ quote, author });
  }

  render() {
    const { quote, author } = this.state;
    const { children } = this.props;

    const context = {
      quote,
      author,
      sendQuote: this.sendQuote,
    };

    return (
      <QuoteContext.Provider value={ context }>
        { children }
      </QuoteContext.Provider>
    );
  }
}

export default QuoteProvider;
