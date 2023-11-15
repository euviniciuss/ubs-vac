import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './Button.styled'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  size?: 'small' | 'medium'
  color?: 'primary' | 'secondary'
  textColor?: 'blue' | 'white'
}

export function Button({
  children,
  size = 'medium',
  color = 'primary',
  textColor = 'white',
  ...props
}: Props) {
  return (
    <S.Container size={size} color={color} textColor={textColor} {...props}>
      {children}
    </S.Container>
  )
}
