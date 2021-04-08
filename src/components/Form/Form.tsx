import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import './form.css';
import { InputBlock, SubmitBlock } from './Form.styles';

export const Form = () => {
  return (
    <form className="form">
      <InputBlock>
        <span className="inputName">Ваше имя :</span>
        <Input required type="text" className="input" />
      </InputBlock>
      <InputBlock>
        <span className="inputName">Адрес для доставки :</span>
        <Input required type="text" className="input" />
      </InputBlock>
      <InputBlock>
        <span className="inputName">Телефон в формате xxx-xx-xx :</span>
        <Input
          required
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          className="input"
        />
      </InputBlock>
      <SubmitBlock>
        <Input type="submit" value="Заказать" className="submit" />
      </SubmitBlock>
    </form>
  );
};
