import React from 'react';
import { observer } from 'mobx-react';
import 'antd/dist/antd.css';
import { ShoppingOutlined } from '@ant-design/icons';
import './amountProducts.css';
import { store } from '../../store';

export const AmountProducts = observer(() => {
  const { sum, sumCount } = store;
  return (
    <div className="amountProducts">
      <ShoppingOutlined className="iconShop" />
      {sumCount} / {sum} ₽
    </div>
  );
});
