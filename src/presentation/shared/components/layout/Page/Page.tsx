import { ReactNode } from 'react'

import { Header } from '../Header/Header'
import * as S from './Page.styled'

type Props = {
  children: ReactNode
}

export function Page({ children }: Props) {
  return <S.Container>{children}</S.Container>
}
Page.Main = S.Content
Page.Header = Header
