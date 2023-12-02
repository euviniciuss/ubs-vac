'use client'

import Link from 'next/link'

import { Button, Input } from '@/presentation/shared/components/form'

import { Header } from '../Header/Header'
import * as S from './RegisterSection.styled'

export function RegisterSection() {
  return (
    <S.Container>
      <Header>
        <Header.TextContainer>
          <Header.Title>Cadastro</Header.Title>
          <Header.Description>
            Lorem ipsum dolor sit amet consectetur. Viverra nibh a dolor sit
            gravida aliquet.
          </Header.Description>
        </Header.TextContainer>
      </Header>

      <S.FormSection>
        <S.InputContainer>
          <Input type="email" placeholder="Digite seu email" label="E-mail" />
          <Input type="password" placeholder="Digite seu senha" label="Senha" />
          <Input
            type="password"
            placeholder="Confirme seu senha"
            label="Confirmar Senha"
          />
        </S.InputContainer>

        <Link href="/">
          <Button>CONTINUAR</Button>
        </Link>
      </S.FormSection>
    </S.Container>
  )
}
