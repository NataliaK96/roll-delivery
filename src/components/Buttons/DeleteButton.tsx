import React from 'react';
import 'antd/dist/antd.css';
import { Button, Tooltip } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './buttons.css';

type Props = {
  onClick: () => void;
};

export const DeleteButton: React.FC<Props> = ({ onClick })=> {
  return (
    <Tooltip title="удалить">
      <Button className="delete" shape="circle" icon={<CloseOutlined />} onClick={onClick}/>
    </Tooltip>
  );
};
