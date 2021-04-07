import React from 'react';
import 'antd/dist/antd.css';
import './basket.css';
import { Header, Main, NameApp } from './Basket.styles';
import { NavLink } from 'react-router-dom';
import { GoBack } from '../../components/Buttons/GoBack';
import { Form } from '../../components/Form/Form';

export const Basket = () => {
  return (
    <>
      <Header>
        <NameApp>
          <img src="logo.png" alt="logo" className="logo" />
          Roll delivery
        </NameApp>
      </Header>
      <Main>
        <NavLink to="/">
          <GoBack onClick={() => {}} />
        </NavLink>
        <Form/>
      </Main>
    </>
  );
};
