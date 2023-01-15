import { ShoppingCartSimple } from 'phosphor-react'
import {
  CardContainer,
  CartWrapper,
  CoffeeTag,
  OrderWrapper,
  TagContainer,
} from './styles'
import { AmountInput } from '../../../../components/AmountInput'
import { CurrencyConverter } from '../../../../utils/formatConverter'

interface CoffeeCardProps {
  photo: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function CoffeeCard({
  photo,
  tags,
  name,
  description,
  price,
}: CoffeeCardProps) {
  return (
    <CardContainer>
      <img src={`/coffees/${photo}`} alt="" />

      <TagContainer>
        {tags.map((tag) => (
          <CoffeeTag key={tag}>{tag}</CoffeeTag>
        ))}
      </TagContainer>

      <p>{name}</p>

      <span>{description}</span>

      <OrderWrapper>
        <p>
          R$ <span>{CurrencyConverter(price)}</span>
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
