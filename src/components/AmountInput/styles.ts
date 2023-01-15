import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
`

export const IconControl = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;

  color: ${(props) => props.theme['brand-purple']};
  background-color: ${(props) => props.theme['base-button']};
`

export const QuantityDisplay = styled.span`
  width: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  text-align: center;

  color: ${(props) => props.theme['base-title']};
`
