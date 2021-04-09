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
  width: 500px;
  height: 300px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  @media (max-width: 539px){
    width: 250px;
    height: 200px;
  }
`;

export const Text = styled.div`
  font-size: 28px;
  margin-bottom: 80px;
  @media (max-width: 539px){
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

export const Button = styled.button`
font-size: 18px;
width: 40%;
min-width: 200px;
color: white;
background-color: rgba(0, 0, 0, 0.9);
border-radius: 4px;
&:hover {
  cursor: pointer;
}
`;
