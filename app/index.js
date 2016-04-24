import React from 'react';
import { render } from 'react-dom';
import { Footer, Header, Home } from './containers';
import './styles.css';

const App = () => (
  <div>
    <Header />
    <Home />
    <Footer />
  </div>
);

render(<App />, document.getElementById('app'));
