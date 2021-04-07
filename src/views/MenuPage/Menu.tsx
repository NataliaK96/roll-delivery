import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuCards } from '../../components/Menu/MenuCards/Cards';
import { SelProducts } from '../../components/SelProducts/SelProducts';
import { ShopCartButton } from '../../components/Buttons/ShopCartButton';
import { Header, Main, NameApp, Products } from './Menu.styles';

export const Menu = () => {
  return (
    <>
      <Header>
        <NameApp>
          <img src="logo.png" alt="logo" className="logo" />
          Roll delivery
        </NameApp>
        <Products>
          <SelProducts />
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
