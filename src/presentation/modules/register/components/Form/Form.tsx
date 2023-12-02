import { ReactNode } from 'react'

import * as S from './Form.styled'

type Props = {
  children: ReactNode
}

export function Form({ children }: Props) {
  return { children }
}

Form.Root = S.FormSection
Form.InputContainer = S.InputContainer
Form.Title = S.Title
