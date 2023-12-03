import Image from 'next/image'
import Link from 'next/link'

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
            <p> Marcos de desenvolvimento</p>
          </Link>
        </S.Info>
      </S.ProfileContainer>
    </S.Container>
  )
}
