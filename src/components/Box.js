import React from 'react';
import Quote from './Quote';
import '../styles/box.css';

function Box(props) {
  return (
    <div id="quote-box">
      <header id="author">
        <h1>Audre Lorde Quotes</h1>
      </header>
      <Quote />
    </div>
  );
}

export default Box;
