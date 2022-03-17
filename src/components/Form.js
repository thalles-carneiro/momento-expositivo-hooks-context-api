import React, { Component } from 'react';

import QuoteContext from '../context/QuoteContext';

class Form extends Component {
  state = {
    quote: '',
    author: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { quote, author } = this.state;
    const { sendQuote } = this.context;

    sendQuote({ quote, author });

    this.setState({ quote: '', author: '' });
  }

  render() {
    const { quote, author } = this.state;

    return (
      <section>
        <h3>Create a quote</h3>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor="quote">
              <input
                id="quote"
                name="quote"
                type="text"
                value={ quote }
                placeholder="Insert a quote"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="author">
              <input
                id="author"
                name="author"
                type="text"
                value={ author }
                placeholder="Insert author's name"
                onChange={ this.handleChange }
              />
            </label>
            <button type="submit">
              Send
            </button>
          </form>
      </section>
    );
  }
}

Form.contextType = QuoteContext;

export default Form;
