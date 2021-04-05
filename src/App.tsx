import React from 'react';
import './App.css';
import { Header, Main, NameApp } from './App.styles';
import { MenuCard } from './components/Menu/Card/Card';
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
        <MenuCard/>
      </Main>
    </div>
  );
}

export default App;
