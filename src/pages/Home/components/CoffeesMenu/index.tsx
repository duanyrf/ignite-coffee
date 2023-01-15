import { CoffeeCard } from '../CoffeeCard'
import { CoffeesList, CoffeesMenuContainer } from './styles'
import { coffees } from '../../../../data/coffeesList'

export function CoffeesMenu() {
  return (
    <CoffeesMenuContainer>
      <header>Nossos cafés</header>

      <CoffeesList>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            photo={coffee.photo}
            tags={coffee.tags}
            name={coffee.name}
            description={coffee.description}
            price={coffee.price}
          />
        ))}
      </CoffeesList>
    </CoffeesMenuContainer>
  )
}
