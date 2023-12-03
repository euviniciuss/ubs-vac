'use client'

import Link from 'next/link'

import { Button, Input } from '@/presentation/shared/components/form'

import { Form } from '../Form/Form'
import { Header } from '../Header/Header'
import * as S from './AddressSection.styled'

export function AddressSection() {
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
        <Form.Title>ENDEREÇO</Form.Title>
        <Form.InputContainer>
          <Input type="text" placeholder="Informe a cidade" label="Cidade" />
          <Input type="text" placeholder="Informe o estado" label="Estado" />
          <Input
            type="text"
            placeholder="Informe o logradouro"
            label="Logradouro"
          />
          <Input type="text" placeholder="Informe o bairro" label="Bairro" />
          <Input type="text" placeholder="555555-555" label="CEP" />
          <Input type="number" placeholder="Número da casa" label="Número" />
          <Input type="text" placeholder="Complemento" label="Complemento" />
        </Form.InputContainer>

        <Link href="/home">
          <Button>CONTINUAR</Button>
        </Link>
      </Form.Root>
    </S.Container>
  )
}
