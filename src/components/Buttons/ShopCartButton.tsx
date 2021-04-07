import React from 'react';
import 'antd/dist/antd.css';
import { Button} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './buttons.css';

type Props = {
  onClick: () => void;
};

export const ShopCartButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className='shopCart'>
      <Button className='cartButton' icon={<ShoppingCartOutlined />} onClick={onClick}>Корзина</Button>
    </div>
  );
};