import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;

  div {
    display: flex;
    align-items: center;
    align-items: center;
    gap: 0.75rem;
  }
`
export const ButtonLocale = styled.button`
  /* width: 9rem; */
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
