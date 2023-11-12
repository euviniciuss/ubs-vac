import { ReactNode } from 'react'

import * as S from './Page.styled'

type Props = {
  children: ReactNode
}

export function Page({ children }: Props) {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
