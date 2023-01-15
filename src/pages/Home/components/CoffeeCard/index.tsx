import { ShoppingCartSimple } from 'phosphor-react'
import {
  CardContainer,
  CartWrapper,
  CoffeeTag,
  OrderWrapper,
  TagContainer,
} from './styles'
import coffeeImg from '../../../../assets/coffees/expresso.svg'
import { AmountInput } from '../../../../components/AmountInput'

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={coffeeImg} alt="Imagem de café expresso" />

      <TagContainer>
        <CoffeeTag>Tradicional</CoffeeTag>
      </TagContainer>

      <p>Expresso Tradicional</p>

      <span>O tradicional café feito com água quente e grãos moídos</span>

      <OrderWrapper>
        <p>
          R$ <span>9,90</span>
        </p>

        <CartWrapper>
          <AmountInput />

          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </CartWrapper>
      </OrderWrapper>
    </CardContainer>
  )
}
