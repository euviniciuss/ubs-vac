import Link from 'next/link'

import { Form } from '@/presentation/modules/register/components/Form/Form'
import { Header } from '@/presentation/modules/register/components/Header/Header'
import { Button, Input } from '@/presentation/shared/components/form'

import * as S from './LoginSection.styled'

export function LoginSection() {
  return (
    <S.Container>
      <Header>
        <Header.TextContainer>
          <Header.Title>Faça seu login</Header.Title>
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
        </Form.InputContainer>

        <Link href="/home">
          <Button>ENTRAR</Button>
        </Link>
      </Form.Root>
    </S.Container>
  )
}
