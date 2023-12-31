'use client'

import Link from 'next/link'

import { Button, Input } from '@/presentation/shared/components/form'

import { Form } from '../Form/Form'
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

      <Form.Root>
        <Form.InputContainer>
          <Input type="email" placeholder="Digite seu email" label="E-mail" />
          <Input type="password" placeholder="Digite seu senha" label="Senha" />
          <Input
            type="password"
            placeholder="Confirme seu senha"
            label="Confirmar Senha"
          />
        </Form.InputContainer>

        <Link href="/cadastro/dados-pessoais">
          <Button>CONTINUAR</Button>
        </Link>
      </Form.Root>
    </S.Container>
  )
}
