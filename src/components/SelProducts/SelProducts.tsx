import React from 'react';
import { observer } from 'mobx-react';
import 'antd/dist/antd.css';
import { ShoppingOutlined } from '@ant-design/icons';
import './selProducts.css';
import { store } from '../../store';

export const SelProducts = observer(() => {
  const { sum, sumCount } = store;
  return (
    <div className="selProducts">
      <ShoppingOutlined className="iconShop" />
      {sumCount} / {sum} ₽
    </div>
  );
});
