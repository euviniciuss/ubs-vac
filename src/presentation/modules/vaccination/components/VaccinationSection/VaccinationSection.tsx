import { Search } from '../Search/Search'
import * as S from './VaccinationSection.styled'

export function VaccinationSection() {
  return (
    <S.Container>
      <Search />

      <S.InfoContainer>
        <S.Title>Área Informativa</S.Title>

        <S.CardContainer>
          <h1>card</h1>
          <h1>card</h1>
        </S.CardContainer>
      </S.InfoContainer>
    </S.Container>
  )
}
