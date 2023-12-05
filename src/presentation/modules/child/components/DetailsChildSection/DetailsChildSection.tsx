import Image from 'next/image'
import Link from 'next/link'
import { PiCaretRightBold } from 'react-icons/pi'

import Boy from '@/public/boy.svg'

import * as S from './DetailsChildSection.styled'

export function DetailsChildSection() {
  return (
    <S.Container>
      <S.ProfileContainer>
        <S.Profile>
          <Image src={Boy} alt="Icon profile" />
        </S.Profile>

        <S.Info>
          <h1>João Pedro Costa</h1>

          <Link href="/">
            <S.LinkContainer>
              <p>Marcos de desenvolvimento</p>
              <PiCaretRightBold size={17} color="1040AB" />
            </S.LinkContainer>
          </Link>
        </S.Info>
      </S.ProfileContainer>

      <S.InfoContainer>
        <S.InfoCard>
          <S.Header>
            <h1>Informações Pessoais</h1>
          </S.Header>

          <S.Infos>
            <S.Field>
              <S.Name>RG</S.Name>
              <S.Value>000000000000-0</S.Value>
            </S.Field>

            <S.Field>
              <S.Name>CPF</S.Name>
              <S.Value>000.000.000-00</S.Value>
            </S.Field>

            <S.Field>
              <S.Name>Data de Nascimento</S.Name>
              <S.Value>01/10/2019</S.Value>
            </S.Field>

            <S.Field>
              <S.Name>Sexo</S.Name>
              <S.Value>Masculino</S.Value>
            </S.Field>

            <S.Field>
              <S.Name>Tipo sanguíneo</S.Name>
              <S.Value>O-</S.Value>
            </S.Field>

            <S.Field>
              <S.Name>Alergias</S.Name>
              <S.Value>Não possui</S.Value>
            </S.Field>
          </S.Infos>
        </S.InfoCard>

        <S.InfoCard>
          <S.Header>
            <h1>Endereço</h1>
          </S.Header>

          <S.Infos>
            <S.Field>
              <S.Name>Cidade</S.Name>
              <S.Value>São Luís</S.Value>
            </S.Field>

            <S.Field>
              <S.Name>Estado</S.Name>
              <S.Value>Maranhão</S.Value>
            </S.Field>

            <S.Field>
              <S.Name>Logradouro</S.Name>
              <S.Value>Avenida Coronel Colares Moreira</S.Value>
            </S.Field>

            <S.Field>
              <S.Name>Bairro</S.Name>
              <S.Value>Jardim Renasceça</S.Value>
            </S.Field>

            <S.Field>
              <S.Name>CEP</S.Name>
              <S.Value>000000-000</S.Value>
            </S.Field>

            <S.Field>
              <S.Name>Número</S.Name>
              <S.Value>15</S.Value>
            </S.Field>
          </S.Infos>
        </S.InfoCard>
      </S.InfoContainer>
    </S.Container>
  )
}
