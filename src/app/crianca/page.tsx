'use client'

import { ChildSection } from '@/presentation/modules/child/components/ChildSection/ChildSection'
import { Page } from '@/presentation/shared/components/layout'

export default function Crianca() {
  return (
    <>
      <Page.Header>
        <Page.Header.Title>Acesse um perfil</Page.Header.Title>
      </Page.Header>
      <Page.Main>
        <ChildSection />
      </Page.Main>
    </>
  )
}
