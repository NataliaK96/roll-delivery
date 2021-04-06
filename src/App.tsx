import React from 'react';
import './App.css';
import { Header, Main, NameApp } from './App.styles';
import { MenuCards } from './components/Menu/MenuCards/Cards';
import { ShopCartButton } from './components/ShopCartButton/ShopCartButton';

function App() {
  return (
    <div className="App">
      <Header>
        <NameApp>
          <img src="logo.png" alt="logo" className="logo"/>
          Roll delivery
        </NameApp>
        <ShopCartButton onClick={()=>{}}/>
      </Header>
      <Main>
        <MenuCards/>
      </Main>
    </div>
  );
}

export default App;
