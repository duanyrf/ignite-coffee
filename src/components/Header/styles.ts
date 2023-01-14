import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 70rem;
  height: 6.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`
export const ButtonLocale = styled.button`
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['brand-purple-light']};

  color: ${(props) => props.theme['brand-purple-dark']};
  font-size: 0.875rem;
`

export const ButtonCart = styled.button`
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['brand-yellow-light']};

  color: ${(props) => props.theme['brand-yellow-dark']};
`
