import { ReactNode } from 'react'
import { InfoContainer } from './styles'

interface BenefitItemProps {
  iconNode: ReactNode
  bgColor: string
  infoText: string
}

export function BenefitItem({ iconNode, bgColor, infoText }: BenefitItemProps) {
  return (
    <InfoContainer bgColor={bgColor}>
      <div>{iconNode}</div>

      <span>{infoText}</span>
    </InfoContainer>
  )
}
