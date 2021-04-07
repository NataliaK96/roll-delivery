import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

export const Form = () => {
  return (
    <form>
      <p>
        Ваше имя
        <Input required type="text" />
      </p>
      <p>
        Адрес для доставки
        <Input required type="text" />
      </p>
      <p>
        Ваш телефон в формате xxx-xx-xx{' '}
        <Input required type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}" />
      </p>
      <Input type="submit" value="Заказать" />
    </form>
  );
};
