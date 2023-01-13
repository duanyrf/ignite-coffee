import { MapPin, ShoppingCart } from 'phosphor-react'
import { ButtonLocale, ButtonCart, HeaderContainer } from './styles'
import logoCoffee from '../../assets/logo-coffee.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="Imagem de copo de café" />

      <div>
        <ButtonLocale>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </ButtonLocale>
        <ButtonCart>
          <ShoppingCart size={22} weight="fill" />
        </ButtonCart>
      </div>
    </HeaderContainer>
  )
}
