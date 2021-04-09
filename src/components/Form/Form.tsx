import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import './form.css';
import { InputBlock, SubmitBlock } from './Form.styles';

type Props = {
  onSubmit: ()=>void
}

export const Form:React.FC<Props> = ({onSubmit}) => {
  return (
    <form className="form"  onSubmit={(e)=>{
      e.preventDefault()
      onSubmit()}}>
      <InputBlock>
        <span className="inputName">Ваше имя :</span>
        <Input required type="text" className="input" />
      </InputBlock>
      <InputBlock>
        <span className="inputName">Адрес для доставки :</span>
        <Input required type="text" className="input" />
      </InputBlock>
      <InputBlock>
        <span className="inputName">Телефон :</span>
        <Input
          required
          type="tel"
          className="input"
        />
      </InputBlock>
      <SubmitBlock>
        <Input type="submit" value="Заказать" className="submit"/>
      </SubmitBlock>
    </form>
  );
};
