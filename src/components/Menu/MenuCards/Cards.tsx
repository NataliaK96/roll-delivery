import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import './Cards.css';
import { Count } from '../../Count/Count';
import { observer } from 'mobx-react';
import {store} from '../../../store'

const { Meta } = Card;

export const MenuCards = observer(() => {
  const {rolls, removeProduct, addProduct, getValueById, sum} = store
  const menuCards = rolls.map((i) => {
    return (
      <div className="menuCard">
        <Card style={{ width: 240 }} cover={<img alt={i.alt} src={i.src} />}>
          <Meta title={i.name} description={i.structure} className="name" />
          <div className="add">
            <div>{i.price} RUB</div>
            <Count value={getValueById(i.id)} inc={()=>addProduct(i.id)} dec={()=>removeProduct(i.id)} />
          </div>
        </Card>
      </div>
    );
  });
  return <>
  <div>{sum}</div>
  <div className="menuCards">{menuCards}</div></>;
});
