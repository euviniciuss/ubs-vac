import { useRouter } from 'next/navigation'
import { PiArrowLeftBold } from 'react-icons/pi'

import * as S from './DetailsSection.styled'

export function DetailsSection() {
  const router = useRouter()

  function goBack() {
    router.back()
  }

  return (
    <S.Container>
      <S.NavigationContainer onClick={goBack}>
        <PiArrowLeftBold size={28} color="#1040AB" />
      </S.NavigationContainer>

      <S.Main>
        <S.TitleContainer>
          <S.Title>AO NASCER</S.Title>
          <S.Text>
            Lorem ipsum dolor sit amet consectetur. Dictum sit egestas ultrices
            nibh.
          </S.Text>
        </S.TitleContainer>

        <S.Info>
          <S.SubTitle>Vacinas a serem tomadas:</S.SubTitle>
          <S.Text>
            <strong>* Vacina A:</strong> Facilisi amet amet vitae condimentum ac
            non massa tempus
          </S.Text>

          <S.Text>
            <strong>* Vacina A:</strong> Facilisi amet amet vitae condimentum ac
            non massa tempus
          </S.Text>
        </S.Info>

        <S.Info>
          <S.SubTitle>Vacinas a serem tomadas:</S.SubTitle>
          <S.Text>
            <strong>Composição da Vacina 1 - </strong> Lorem ipsum dolor sit
            amet consectetur.
          </S.Text>

          <S.Text>
            <strong>Composição da Vacina 2 - </strong> Lorem ipsum dolor sit
            amet consectetur.
          </S.Text>

          <S.Text>
            <strong>Composição da Vacina 3 - </strong> Lorem ipsum dolor sit
            amet consectetur.
          </S.Text>
        </S.Info>

        <S.Info>
          <S.SubTitle>Efeitos Adversos:</S.SubTitle>
          <S.Text>
            Lorem ipsum dolor sit amet consectetur. Facilisi amet amet vitae
            condimentum ac non massa tempus sagittis. Eu ultricies molestie ut
            risus in rutrum malesuada. Consectetur malesuada malesuada ac risus
            vulputate.
          </S.Text>
        </S.Info>

        <S.Info>
          <S.SubTitle>Prazos das Vacinas</S.SubTitle>
          <S.Text>
            Lorem ipsum dolor sit amet consectetur. Facilisi amet amet vitae
            condimentum ac non
          </S.Text>
        </S.Info>

        <S.Info>
          <S.SubTitle>Importância da Vacinação:</S.SubTitle>
          <S.Text>
            Lorem ipsum dolor sit amet consectetur. Facilisi amet amet vitae
            condimentum ac non massa tempus sagittis. Eu ultricies molestie ut
            risus in rutrum malesuada. Consectetur malesuada malesuada ac risus
            vulputate.
          </S.Text>
        </S.Info>
      </S.Main>
    </S.Container>
  )
}
