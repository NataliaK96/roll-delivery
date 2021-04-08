import React from 'react';
import {store} from '../../store'
import { observer } from 'mobx-react';
import { SelProducts, Total } from './SelectedProducts.style';
import './selectedProducts.css';
import { SelProduct } from './SelProduct';

export const SelectedProducts = observer(() => {
  const { sum } = store;
  return (
    <SelProducts>
      <SelProduct/>
      <Total>Всего: {sum} ₽</Total>
      </SelProducts>
    
  );
});
