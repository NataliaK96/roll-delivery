import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import './buttons.css';

export const GoBack = () => {
  return (
    <Button className="goBack" icon={<LeftOutlined />}>
      Меню
    </Button>
  );
};
