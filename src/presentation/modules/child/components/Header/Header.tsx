import Image from 'next/image'
import Link from 'next/link'
import { PiArrowLeftBold } from 'react-icons/pi'

import BackgroundHeader from '@/public/background-radius.svg'

import * as S from './Header.styled'

export function Header() {
  return (
    <S.Container>
      <Image src={BackgroundHeader} alt="Background header" />

      <S.Content>
        <Link href="/">
          <PiArrowLeftBold size={20} color="#fff" />
        </Link>

        <S.Title>Acesse um perfil</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet consectetur. Aliquet neque lacus
        </S.Description>
      </S.Content>
    </S.Container>
  )
}
