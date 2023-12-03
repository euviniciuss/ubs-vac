import { InputHTMLAttributes } from 'react'

import * as S from './Input.styled'

type Props = {
  type: 'text' | 'password' | 'email' | 'number'
  label: string
  placeholder: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ type, label, placeholder, ...rest }: Props) {
  return (
    <S.Container>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...rest} />
    </S.Container>
  )
}
