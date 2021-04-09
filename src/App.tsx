import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Footer, Link } from './App.styles';
import { Basket } from './views/BasketPage/Basket';
import { Menu } from './views/MenuPage/Menu';

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Menu />} />
      <Route path="/basket" render={() => <Basket />} />
      <Footer><Link href="https://github.com/NataliaK96" target="_blank">© Natalia Komarova</Link></Footer>
    </div>
  );
}

export default App;
