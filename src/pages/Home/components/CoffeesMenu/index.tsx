import { CoffeeCard } from '../CoffeeCard'
import { CoffeesList, CoffeesMenuContainer } from './styles'

export function CoffeesMenu() {
  return (
    <CoffeesMenuContainer>
      <header>Nossos cafés</header>

      <CoffeesList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeesList>
    </CoffeesMenuContainer>
  )
}
