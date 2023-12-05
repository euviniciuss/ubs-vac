import { PiMagnifyingGlassBold } from 'react-icons/pi'

import * as S from './Search.styled'

export function Search() {
  return (
    <S.Container>
      <PiMagnifyingGlassBold size={25} color="#8B8B8B" />

      <input type="text" placeholder="BUSCAR" />
    </S.Container>
  )
}
