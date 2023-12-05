import * as S from './MarcoSection.styled'

export function MarcoSection() {
  const marcos = [
    {
      id: 1,
      interval: '0 a 6 meses',
      content: ['Sorri quando estimulada']
    },
    {
      id: 2,
      interval: '6 a 9 meses',
      content: ['Entende "não"', 'Ri e dá gargalhadas por prazer']
    },
    {
      id: 3,
      interval: '9 a 12 meses',
      content: ['Chora quando os pais saem', 'Imita sons e gestos']
    },
    {
      id: 4,
      interval: '18 meses',
      content: ['Estranha desconhecidos', 'Reconhece 2 ações']
    },
    {
      id: 5,
      interval: '2 anos',
      content: ['Brinca ao lado de outra criança', 'Mostra mais independência']
    }
  ]
  return (
    <S.Container>
      <S.TitleContainer>
        <h1>Controle de crescimento</h1>
        <p>
          Marcos de desenvolvimento da criança são relativos ao seu crescimento
          e funções que devem ser exercidas em aspectos socio emocional, de
          linguagem, cogntivo e motor.
        </p>
      </S.TitleContainer>

      <S.InfoContainer>
        {marcos.map(marco => (
          <S.Info key={marco.id}>
            <S.Title>{marco.interval}</S.Title>

            {marco.content.map((m, index) => (
              <S.ContentInfo key={index}>
                <input type="checkbox" name="marco" />
                <p>{m}</p>
              </S.ContentInfo>
            ))}

            <S.Divider />
          </S.Info>
        ))}
      </S.InfoContainer>
    </S.Container>
  )
}
