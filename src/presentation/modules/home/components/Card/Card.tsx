import Link from 'next/link'
import { ReactNode } from 'react'

import * as S from './Card.styled'

type Props = {
  href: string
  children: ReactNode
}

export function Card({ children, href }: Props) {
  return (
    <Link href={href}>
      <S.Container>{children}</S.Container>
    </Link>
  )
}

Card.Title = S.Title
