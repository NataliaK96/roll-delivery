import styled from 'styled-components';

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Window = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  background-color: white;
  padding: 20px;
  margin: 20px 0;
`;

export const Text = styled.div`
  font-size: 28px;
  margin-bottom: 80px;
`;

export const Button = styled.button`
font-size: 18px;
width: 40%;
min-width: 252px;
color: white;
background-color: rgba(0, 0, 0, 0.9);
border-radius: 4px;
&:hover {
  cursor: pointer;
}
`;
