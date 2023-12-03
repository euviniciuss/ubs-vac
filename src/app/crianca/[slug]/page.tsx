import { DetailsChildSection } from '@/presentation/modules/child/components/DetailsChildSection/DetailsChildSection'
import { Page } from '@/presentation/shared/components/layout'

export default function DetailsChild() {
  return (
    <>
      <Page.Header>
        <Page.Header.Title>Perfil da Criança</Page.Header.Title>
      </Page.Header>
      <Page.Main>
        <DetailsChildSection />
      </Page.Main>
    </>
  )
}
