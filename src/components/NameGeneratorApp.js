import { css } from '@emotion/core';
import React from 'react';
import '../styles/App.scss';
import NameGenerator from './NameGenerator';

function App() {
  return (
    <div className="App">
      <header css={css`
        background-color: #53131E !important;
      `} className="App-header">
        <NameGenerator />
      </header>
    </div>
  );
}

export default App;
