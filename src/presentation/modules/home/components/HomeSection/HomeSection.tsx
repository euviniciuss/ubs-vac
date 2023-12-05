import Image from 'next/image'
import Link from 'next/link'
import {
  PiCalendarCheckFill,
  PiSyringeFill,
  PiBabyFill,
  PiClipboardTextFill,
  PiPlusBold,
  PiUserBold
} from 'react-icons/pi'

import { Button } from '@/presentation/shared/components/form'

import Ilustration from '@/public/home_illustration.svg'

import { Card } from '../Card/Card'
import * as S from './HomeSection.styled'

export function HomeSection() {
  return (
    <S.Container>
      <S.PresenationContainer>
        <S.TextContainer>
          <h1>Olá, Usuário.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquet neque lacus leo
            risus congue facilisi eu proin.
          </p>
        </S.TextContainer>

        <Image src={Ilustration} alt="Ilustração home" width={132} />
      </S.PresenationContainer>

      <S.CardsContainer>
        <Card href="/calendario">
          <PiCalendarCheckFill size={54} color="#3464CF" />

          <Card.Title>Calendário Vacinal</Card.Title>
        </Card>

        <Card href="/vacinacao">
          <PiSyringeFill size={38} color="#3464CF" />

          <Card.Title>Vacinação</Card.Title>
        </Card>

        <Card href="/crianca">
          <PiBabyFill size={54} color="#3464CF" />

          <Card.Title>Perfil da Criança</Card.Title>
        </Card>

        <Card href="/agendamento">
          <PiClipboardTextFill size={38} color="#3464CF" />

          <Card.Title>Agendamento</Card.Title>
        </Card>
      </S.CardsContainer>

      <S.Action>
        <Link href="/perfil">
          <Button color="secondary" size="small" textColor="blue">
            Acessar perfil <PiUserBold color="#3464CF" />
          </Button>
        </Link>

        <Link href="/crianca">
          <Button color="secondary" size="small" textColor="blue">
            Adcionar criança <PiPlusBold color="#3464CF" />
          </Button>
        </Link>
      </S.Action>
    </S.Container>
  )
}
