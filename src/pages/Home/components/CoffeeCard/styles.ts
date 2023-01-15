import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};

  > img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }

  > p {
    width: 13.5rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    margin-bottom: 0.5rem;
    text-align: center;

    color: ${(props) => props.theme['base-subtitle']};
  }

  > span {
    width: 13.5rem;
    margin-bottom: 2rem;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;

    color: ${(props) => props.theme['base-label']};
  }
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0px;
  gap: 0.25rem;
`

export const CoffeeTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  background-color: ${(props) => props.theme['brand-yellow-light']};

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  text-transform: uppercase;

  color: ${(props) => props.theme['brand-yellow-dark']};
`

export const OrderWrapper = styled.footer`
  width: 13rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: right;

    color: ${(props) => props.theme['base-text']};

    span {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;
      text-align: right;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 0.5rem;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 2.375rem;
    height: 2.375rem;
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme['base-card']};
    background-color: ${(props) => props.theme['brand-purple-dark']};
  }
`
