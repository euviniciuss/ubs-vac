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
      <S.Content>
        <Link href="/">
          <PiArrowLeftBold size={24} color="#fff" />
        </Link>

        {children}
      </S.Content>
    </S.Container>
  )
}

Header.Title = S.Title
