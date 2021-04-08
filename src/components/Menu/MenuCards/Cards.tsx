import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import './cards.css';
import { Count } from '../../Count/Count';
import { observer } from 'mobx-react';
import {store} from '../../../store'

const { Meta } = Card;

export const MenuCards = observer(() => {
  const {rolls, removeProduct, addProduct, getValueById} = store
  const menuCards = rolls.map((i) => {
    return (
      <div className="menuCard" key={i.id}>
        <Card className="card" cover={<img alt={i.alt} src={i.src} />}>
          <Meta title={i.name} description={i.structure} className="name" />
          <div className="add">
            <div>{i.price} ₽</div>
            <Count value={getValueById(i.id)} inc={()=>addProduct(i.id)} dec={()=>removeProduct(i.id)} />
          </div>
        </Card>
      </div>
    );
  });
  return <>
  <div className="menuCards">{menuCards}</div></>;
});
