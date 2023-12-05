import Image from 'next/image'
import Link from 'next/link'
import { PiCaretRightBold, PiSignOutBold } from 'react-icons/pi'

import Women from '@/public/women.svg'

import * as S from './PerfilSection.styled'

export function PerfilSection() {
  return (
    <S.Container>
      <S.ProfileContainer>
        <S.Profile>
          <Image src={Women} alt="Icon profile" width={65} />
        </S.Profile>

        <S.Info>
          <h1>Ana Julia Santos</h1>

          <Link href="/crianca">
            <S.LinkContainer>
              <p>Acessar perfil da criança</p>
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
              <S.Value>18/11/2004</S.Value>
            </S.Field>

            <S.Field>
              <S.Name>Sexo</S.Name>
              <S.Value>Feminino</S.Value>
            </S.Field>

            <S.Field>
              <S.Name>Celular</S.Name>
              <S.Value>(00) 00000-0000</S.Value>
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

      <S.Logout href="/">
        <PiSignOutBold size={24} color="#1040AB" />

        <p>Sair da conta</p>
      </S.Logout>
    </S.Container>
  )
}
