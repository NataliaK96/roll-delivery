import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {rolls} from '../rolls'
const { Meta } = Card;

export const MenuCard = () => {
  return (
    <Card
      style={{ width: 240 }}
      cover={
        <img
          alt="BigEye-California"
          src={rolls[1].src}
        />
      }
    >
      <Meta title="BigEye Калифорния" description="мясо краба, огурец, авокадо, масаго, тунец, васаби" />
    </Card>
  );
};
