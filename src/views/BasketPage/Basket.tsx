import React from 'react';
import 'antd/dist/antd.css';
import './basket.css';
import { Header, Main, NameApp, ReturnButton } from './Basket.styles';
import { NavLink } from 'react-router-dom';
import { GoBack } from '../../components/Buttons/GoBack';
import { Form } from '../../components/Form/Form';
import {SelectedProducts} from '../../components/SelectedProducts/SelectedProducts';

export const Basket = () => {
  return (
    <>
      <Header>
        <NameApp>
          <img src="logo.png" alt="logo" className="logo" />
          Roll delivery
        </NameApp>
        <ReturnButton>
        <NavLink to="/">
          <GoBack/>
        </NavLink>
        </ReturnButton>
      </Header>
      <Main>
        <SelectedProducts/>
        <Form/>
      </Main>
    </>
  );
};
