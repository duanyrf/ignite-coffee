import styled from 'styled-components'

interface InfoContainerProps {
  bgColor: string
}

export const InfoContainer = styled.div<InfoContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${({ bgColor }) => bgColor};
    color: ${(props) => props.theme['base-white']};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`
