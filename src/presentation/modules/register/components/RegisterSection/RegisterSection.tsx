import { Input } from '@/presentation/shared/components/form'

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
        <Input type="email" placeholder="Digite seu email" label="E-mail" />
      </S.FormSection>
    </S.Container>
  )
}
