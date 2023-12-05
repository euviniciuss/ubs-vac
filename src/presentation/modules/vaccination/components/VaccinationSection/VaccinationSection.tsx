'use client'

import { Search } from '@/presentation/shared/components/form'

import { Card } from '../Card/Card'
import * as S from './VaccinationSection.styled'

export function VaccinationSection() {
  return (
    <S.Container>
      <Search />

      <S.InfoContainer>
        <S.Title>Área Informativa</S.Title>

        <S.CardContainer>
          <Card slug="ao-nascer">
            <Card.Title>Ao nascer</Card.Title>
            <Card.Description>
              Lorem ipsum dolor sit amet consectetur. Nibh malesuada
            </Card.Description>
          </Card>

          <Card slug="ao-nascer">
            <Card.Title>Ao nascer</Card.Title>
            <Card.Description>
              Lorem ipsum dolor sit amet consectetur. Nibh malesuada
            </Card.Description>
          </Card>
        </S.CardContainer>
      </S.InfoContainer>
    </S.Container>
  )
}
