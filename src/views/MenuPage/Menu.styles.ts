import styled from 'styled-components'

export const Header = styled.div`
height: 64px;
color: #fff;
background-color: #f3cd01;
box-shadow: 0 3px 4px -1px rgba(0,0,0,0.5);
display: flex;
justify-content: space-between;
align-items: center;
`

export const NameApp = styled.div`
display: flex;
font-size: 16px;
align-items: center;
margin-left: 5%;
font-size: 28px;
`

export const Products = styled.div`
display: flex;
margin-right: 5%;
font-size: 18px
`

export const Main = styled.div`
display: flex;
flex: auto;
flex-direction: column;
margin: 20px 5%;
}
`
export const Title = styled.div`
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 20px;
  }
`;