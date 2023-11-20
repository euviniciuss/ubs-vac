import Link from 'next/link'
import { PiArrowLeftBold } from 'react-icons/pi'

import * as S from './Header.styled'

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <Link href="/">
          <PiArrowLeftBold size={24} color="#fff" />
        </Link>

        <S.Title>Calendário Vacinal</S.Title>
      </S.Content>
    </S.Container>
  )
}
