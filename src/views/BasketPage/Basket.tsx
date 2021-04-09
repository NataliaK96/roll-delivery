import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './basket.css';
import { Header, Main, NameApp, ReturnButton, EmptyBasket } from './Basket.styles';
import { NavLink } from 'react-router-dom';
import { GoBack } from '../../components/Buttons/GoBack';
import { Form } from '../../components/Form/Form';
import { SelectedProducts } from '../../components/SelectedProducts/SelectedProducts';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { store } from './../../store/index';
import { observer } from 'mobx-react';

export const Basket = observer(() => {
  const [isShow, setShow] = useState<boolean>(false);
  const basketRolls = store.basket.length ? (
    <>
      <SelectedProducts />
      <Form onSubmit={() => setShow(true)} />
    </>
  ) : (
    <EmptyBasket>Корзина пуста</EmptyBasket>
  );

  return (
    <>
      <Header>
        <NameApp>
          <img src="logo.png" alt="logo" className="logo" />
          Roll delivery
        </NameApp>
        <ReturnButton>
          <NavLink to="/">
            <GoBack />
          </NavLink>
        </ReturnButton>
      </Header>
      <Main>
        {basketRolls}
        {/* <SelectedProducts/>
        <Form onSubmit={()=>setShow(true)}/> */}
      </Main>
      {isShow && <ModalWindow onClose={store.resetBasket} />}
    </>
  );
});
