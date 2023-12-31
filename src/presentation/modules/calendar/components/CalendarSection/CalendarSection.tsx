import Image from 'next/image'

import CalendarIllustration from '@/public/calendar-illustration.svg'

import { Card } from '../Card/Card'
import { ScrollView } from '../ScrollView/ScrollView'
import * as S from './CalendarSection.styled'

export function CalendarSection() {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  return (
    <S.Container>
      <S.Banner>
        <S.TextContainer>
          <h1>Importante</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac aenean varius in nullam.
          </p>
        </S.TextContainer>

        <Image src={CalendarIllustration} alt="Calendar" width={134} />
      </S.Banner>

      <ScrollView months={months} />
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </S.Container>
  )
}
