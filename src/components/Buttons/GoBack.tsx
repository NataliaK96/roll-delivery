import React from 'react';
import 'antd/dist/antd.css';
import { Button} from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import './buttons.css';

type Props = {
  onClick: () => void;
};

export const GoBack: React.FC<Props> = ({ onClick }) => {
  return (
    <div className='returnButton'>
      <Button className='goBack' icon={<LeftOutlined />} onClick={onClick}>Меню</Button>
    </div>
  );
};
