import { Plus, Minus } from 'phosphor-react'
import { IconControl, InputContainer, QuantityDisplay } from './styles'

export function AmountInput() {
  return (
    <InputContainer>
      <IconControl>
        <Minus size={14} weight="bold" />
      </IconControl>

      <QuantityDisplay>1</QuantityDisplay>

      <IconControl>
        <Plus size={14} weight="bold" />
      </IconControl>
    </InputContainer>
  )
}
