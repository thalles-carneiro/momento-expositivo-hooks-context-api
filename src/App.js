import React, { Component } from 'react';

import QuoteProvider from './context/QuoteProvider';

import Form from './components/Form';
import Quote from './components/Quote';

class App extends Component {
  render() {
    return (
      <QuoteProvider>
        <main>
          <Form />
          <Quote />
        </main>
      </QuoteProvider>
    );
  }
}

export default App;
