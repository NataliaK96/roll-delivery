import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import './form.css';

export const Form = () => {
  return (
    <form className="form">
      <div className="inputBlock">
        <span className="inputName">Ваше имя :</span>
        <Input required type="text" className="input" />
      </div>
      <div className="inputBlock">
        <span className="inputName">Адрес для доставки :</span>
        <Input required type="text" className="input" />
      </div>
      <div className="inputBlock">
        <span className="inputName">Телефон в формате xxx-xx-xx :</span>
        <Input
          required
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          className="input"
        />
      </div>
      <div className="submitBlock">
      <Input type="submit" value="Заказать" className="submit" /></div>
    </form>
  );
};
