import React, { useContext } from 'react';

import QuoteContext from '../context/QuoteContext';

const Quote = () => {
  const { quote, author } = useContext(QuoteContext);

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

export default Quote;
