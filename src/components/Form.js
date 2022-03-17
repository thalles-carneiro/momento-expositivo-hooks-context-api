import React, { useState, useContext } from 'react';

import QuoteContext from '../context/QuoteContext';

const Form = () => {
  const [state, setState] = useState({ quote: '', author: '' });
  const { sendQuoteAndAuthor } = useContext(QuoteContext);

  const handleChange = ({ target: { name, value } }) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { quote, author } = state;

    sendQuoteAndAuthor({ quote, author });

    setState({ quote: '', author: ''});
  }

  return (
    <section>
      <h3>Create a quote</h3>
        <form onSubmit={ handleSubmit }>
          <label htmlFor="quote">
            <input
              id="quote"
              name="quote"
              type="text"
              value={ state.quote }
              placeholder="Insert a quote"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="author">
            <input
              id="author"
              name="author"
              type="text"
              value={ state.author }
              placeholder="Insert author's name"
              onChange={ handleChange }
            />
          </label>
          <button type="submit">
            Send
          </button>
        </form>
    </section>
  );
}

export default Form;
