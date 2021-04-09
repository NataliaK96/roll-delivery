import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuCards } from '../../components/Menu/MenuCards/Cards';
import { AmountProducts } from '../../components/AmountProducts/amountProducts';
import { ShopCartButton } from '../../components/Buttons/ShopCartButton';
import { Header, Title, Main, NameApp, Products } from './Menu.styles';

export const Menu = () => {
  return (
    <>
      <Header>
        <NameApp>
          <img src="logo.png" alt="logo" className="logo" />
          <Title>Roll delivery</Title>
        </NameApp>
        <Products>
          <AmountProducts />
          <NavLink to="/basket">
            <ShopCartButton onClick={() => {}} />
          </NavLink>
        </Products>
      </Header>
      <Main>
        <MenuCards />
      </Main>
    </>
  );
};
