import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, Window, Text, Button } from './ModalWindow.styles';

type Props = {
  onClose: () => void;
};

export const ModalWindow: React.FC<Props> = ({ onClose }) => {
  return (
    <Wrapper>
      <Window>
        <Text>Заказ принят!</Text>
        <NavLink to="/">
          <Button onClick={onClose}>OK</Button>
        </NavLink>
      </Window>
    </Wrapper>
  );
};
