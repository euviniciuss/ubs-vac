'use client'

import Link from 'next/link'

import { Button, Input } from '@/presentation/shared/components/form'

import { Form } from '../Form/Form'
import { Header } from '../Header/Header'
import * as S from './PersonalDataSection.styled'

export function PersonalDataSection() {
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
        <Form.Title>DADOS PESSOAIS</Form.Title>
        <Form.InputContainer>
          <Input type="text" placeholder="Digite seu nome" label="Nome" />
          <Input type="text" placeholder="000000000000-0" label="RG" />
          <Input type="text" placeholder="000.000.000-00" label="CPF" />
          <Input
            type="text"
            placeholder="DD/MM/AAAA"
            label="Data de nascimento"
          />
          <Input type="text" placeholder="Selecione seu sexo" label="Sexo" />
          <Input type="text" placeholder="(00) 0000-0000" label="Telefone" />
          <Input type="text" placeholder="(00) 0000-0000" label="Celular" />
        </Form.InputContainer>

        <Link href="/">
          <Button>CONTINUAR</Button>
        </Link>
      </Form.Root>
    </S.Container>
  )
}
