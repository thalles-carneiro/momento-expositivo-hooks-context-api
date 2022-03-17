import React from 'react';

import QuoteProvider from './context/QuoteProvider';

import Form from './components/Form';
import Quote from './components/Quote';

const App = () => (
  <QuoteProvider>
    <main>
      <Form />
      <Quote />
    </main>
  </QuoteProvider>
);

export default App;
