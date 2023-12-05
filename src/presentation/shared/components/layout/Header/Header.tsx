import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { PiArrowLeftBold } from 'react-icons/pi'

import * as S from './Header.styled'

type Props = {
  children: ReactNode
}

export function Header({ children }: Props) {
  const router = useRouter()

  function goBack() {
    router.back()
  }

  return (
    <S.Container>
      <S.Content>
        <S.NavigationContainer onClick={goBack}>
          <PiArrowLeftBold size={24} color="#fff" />
        </S.NavigationContainer>

        {children}
      </S.Content>
    </S.Container>
  )
}

Header.Title = S.Title
