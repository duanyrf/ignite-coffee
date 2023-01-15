import { CoffeesMenu } from './components/CoffeesMenu'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeesMenu />
    </HomeContainer>
  )
}
