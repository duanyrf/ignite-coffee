import styled from 'styled-components'
import introBackgroundImg from '../../../../assets/intro-background.svg'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${introBackgroundImg}) no-repeat center`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  /* img {
    width: 29.75rem;
    height: 22.5rem;
  } */
`
