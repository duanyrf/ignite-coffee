import styled from 'styled-components'

export const CoffeesMenuContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  header {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    display: flex;
    align-items: center;
    margin-bottom: 3.375rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeesList = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  flex-wrap: wrap;
`
