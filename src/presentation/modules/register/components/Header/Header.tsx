import Link from 'next/link'
import { ReactNode } from 'react'
import { PiArrowLeftBold } from 'react-icons/pi'

import * as S from './Header.styled'

type Props = {
  children: ReactNode
}

export function Header({ children }: Props) {
  return (
    <S.Container>
      <Link href="/">
        <PiArrowLeftBold size={28} color="#1040AB" />
      </Link>

      {children}

      <S.Divider />
    </S.Container>
  )
}
Header.TextContainer = S.TextContainer
Header.Title = S.Title
Header.Description = S.Description
