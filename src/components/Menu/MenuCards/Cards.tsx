import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {rolls} from '../rolls'
import './Cards.css';

const { Meta } = Card;

export const MenuCards = () => {
    const menuCard = rolls.map((i) => {
      return (
        <div className='menuCard'>
        <Card
        style={{ width: 240 }}
        cover={<img alt={i.alt} src={i.src}/>}>
        <Meta title={i.name} description={i.structure} className='name'/>
        <div className='price'>{i.price} RUB</div>
      </Card>  
      </div>
      );
    });
    return (
          <div className='menuCards'>{menuCard}</div>
    )};
