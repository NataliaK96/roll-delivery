import React from 'react';
import {store} from '../../store'
import { observer } from 'mobx-react';
import {
  SelProductCard,
  NameProduct,
  NumberProduct,
  DescriptionProduct,
  DeleteProduct,
  PriceProduct
} from './SelectedProducts.style';
import './selectedProducts.css';
import { DeleteButton } from '../Buttons/DeleteButton';

export const SelProduct = observer(() => {
    const { basket, getProductById, deleteProduct} = store
    const selectedRolls = basket.map((i) => {
       const p =  getProductById(i.id)
       if (!p) return null;
      return (
<SelProductCard key={i.id}>
      <DescriptionProduct>
        <img alt={p.alt} src={p.src} className="img-product" />
        <NameProduct>{p.name}</NameProduct>
        <NumberProduct>x {i.count}</NumberProduct>
      </DescriptionProduct>
      <DeleteProduct>
          <PriceProduct>{p.price} ₽</PriceProduct>
        <DeleteButton onClick={() => deleteProduct(p.id)} />
      </DeleteProduct>
    </SelProductCard>
      );
    });
    return <>
    <div>{selectedRolls}</div></>;
});
