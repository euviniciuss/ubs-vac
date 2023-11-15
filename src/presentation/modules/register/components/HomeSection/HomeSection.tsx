import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/presentation/shared/components/form'

import PeopleIllustration from '@/public/people.svg'

import * as S from './HomeSection.styled'

export function HomeSection() {
  return (
    <S.Container>
      <S.Content>
        <S.Message>
          <h1>Bem-vindo!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra nibh a dolor sit
            gravida aliquet.
          </p>
        </S.Message>

        <S.ActionContainer>
          <S.ActionContent>
            <Image
              src={PeopleIllustration}
              alt="People Illustration"
              width={301}
              height={301}
            />

            <S.Actions>
              <Button color="secondary">Faça seu cadastro</Button>

              <p>
                Já posssui uma conta? <Link href="/">Faça o login!</Link>
              </p>
            </S.Actions>
          </S.ActionContent>
        </S.ActionContainer>
      </S.Content>
    </S.Container>
  )
}
