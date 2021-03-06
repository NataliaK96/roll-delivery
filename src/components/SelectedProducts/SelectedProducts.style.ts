import styled from 'styled-components';

export const SelProducts = styled.div`
  min-height: 30vh;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin: 10px;
  padding: 20px;
`;
export const SelProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
`;
export const NameProduct = styled.div`
  margin-right: 12px;
  @media (max-width: 500px) {
    margin-right: 6px;
  }
`;
export const NumberProduct = styled.div``;
export const DescriptionProduct = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  flex-wrap: wrap;
  @media (max-width: 539px) {
    font-size: 14px;
  }
`;
export const DeleteProduct = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 539px) {
    font-size: 16px;
    flex-grow: 1;
    justify-content: space-between;
  }
`;
export const PriceProduct = styled.div`
  margin-right: 20px;
`;
export const Total = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
