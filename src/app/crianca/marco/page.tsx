import { MarcoSection } from '@/presentation/modules/child/components/MarcoSection/MarcoSection'
import { Page } from '@/presentation/shared/components/layout'

export default function Marco() {
  return (
    <>
      <Page.Header>
        <Page.Header.Title>Marcos de Desenvolvimento</Page.Header.Title>
      </Page.Header>
      <Page.Main>
        <MarcoSection />
      </Page.Main>
    </>
  )
}
