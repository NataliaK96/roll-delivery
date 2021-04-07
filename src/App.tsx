import React from 'react';
import './App.css';
import { Footer, Header, Main, NameApp, Products } from './App.styles';
import { MenuCards } from './components/Menu/MenuCards/Cards';
import { SelProducts } from './components/SelProducts/SelProducts';
import { ShopCartButton } from './components/ShopCartButton/ShopCartButton';

function App() {
  return (
    <div className="App">
      <Header>
        <NameApp>
          <img src="logo.png" alt="logo" className="logo" />
          Roll delivery
        </NameApp>
        <Products>
        <SelProducts/>
        <ShopCartButton onClick={() => {}} />
        </Products>
      </Header>
      <Main>
        <MenuCards />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
