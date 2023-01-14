import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  BannerText,
  BenefitsContainer,
  IntroContainer,
  IntroContent,
} from './styles'
import introImg from '../../../../assets/intro-image.svg'
import { BenefitItem } from '../BenefitItem'

export function Intro() {
  const theme = useTheme()

  return (
    <IntroContainer>
      <IntroContent>
        <section>
          <BannerText>
            <p>Encontre o café perfeito para qualquer hora do dia</p>

            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </BannerText>

          <BenefitsContainer>
            <BenefitItem
              bgColor={theme['brand-yellow-dark']}
              iconNode={<ShoppingCart size={16} weight="fill" />}
              infoText="Compra simples e segura"
            />

            <BenefitItem
              bgColor={theme['base-text']}
              iconNode={<Package size={16} weight="fill" />}
              infoText="Embalagem mantém o café intacto"
            />

            <BenefitItem
              bgColor={theme['brand-yellow']}
              iconNode={<Timer size={16} weight="fill" />}
              infoText="Entrega rápida e rastreada"
            />

            <BenefitItem
              bgColor={theme['brand-purple']}
              iconNode={<Coffee size={16} weight="fill" />}
              infoText="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </section>

        <img src={introImg} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
