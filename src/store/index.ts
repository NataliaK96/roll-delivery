import { cast, types } from 'mobx-state-tree';
import {rolls} from '../components/Menu/rolls'

const Roll = types.model({
  id: types.number,
  src: types.string,
  alt: types.string,
  name: types.string,
  structure: types.string,
  price: types.number,
});

const SelectedProduct = types
  .model({
    id: types.number,
    count: types.number,
  })
  .actions((self) => ({
    increment: () => {
      self.count = self.count + 1;
    },
    decrement: () => {
      if (self.count > 0) {
        self.count = self.count - 1;
      }
    },
  }));

const Store = types
  .model({
    rolls: types.array(Roll),
    basket: types.array(SelectedProduct),
  })
  .views((self) => ({
    get sum() {
      return self.basket.reduce((acc, p) => {
        const product = self.rolls.find((r) => r.id === p.id);
        const totalPrice = product ? p.count * product.price : 0;
        return acc + totalPrice;
      }, 0);
    },
    get sumCount() {
      return self.basket.reduce((acc, p) => {
        const product = self.rolls.find((r) => r.id === p.id);
        const count = product ? p.count : 0;
        return acc + count;
      }, 0);
    },
    getValueById(id: number){
        const product = self.basket.find((item)=> item.id === id);
        return product? product.count: 0
    }
  }))
  .actions((self)=>({
      addProduct: (id: number)=>{
         const product = self.basket.find((item)=> item.id === id);
         if (product) {
            product.increment()
         }
         else {
             self.basket.push({ id, count: 1})
         }
      },
      removeProduct: (id: number)=>{
        const product = self.basket.find((item)=> item.id === id);
        if (!product) return;
        if(product.count > 1){product.decrement()}
        else {
            const filteredBasket = self.basket.filter((item)=> item.id !== id)
            self.basket = cast(filteredBasket)
        }
      }
  }))


 export const store = Store.create({rolls})