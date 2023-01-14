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
`

export const IntroContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 1rem;

  p {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    font-stretch: 100;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BenefitsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
