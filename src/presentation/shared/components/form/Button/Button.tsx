import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './Button.styled'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  size?: 'small' | 'medium'
  color?: 'primary' | 'secondary'
}

export function Button({
  children,
  size = 'medium',
  color = 'primary',
  ...props
}: Props) {
  return (
    <S.Container size={size} color={color} {...props}>
      {children}
    </S.Container>
  )
}
