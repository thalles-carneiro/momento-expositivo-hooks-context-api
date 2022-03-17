import React, { useState } from 'react';
import QuoteContext from './QuoteContext';

const QuoteProvider = ({ children }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const sendQuoteAndAuthor = ({ quote, author }) => {
    setQuote(quote);
    setAuthor(author);
  };

  const context = {
    quote,
    author,
    sendQuoteAndAuthor,
  };

  return (
    <QuoteContext.Provider value={ context }>
      { children }
    </QuoteContext.Provider>
  );
}

export default QuoteProvider;
