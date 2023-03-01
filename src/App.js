import React from 'react';
import logo from './logo.svg';
import './App.css';
import './pages/Home.tsx';

function App({ Component, pageProps }) {
  return (
    <div className="App">
      <header className="App-header">
        <Component {...pageProps} />
      </header>
    </div>
  );
}

export default App;
