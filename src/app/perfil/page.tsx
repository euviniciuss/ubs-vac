'use client'

import { PerfilSection } from '@/presentation/modules/perfil/components/PerfilSection/PerfilSection'
import { Page } from '@/presentation/shared/components/layout'

export default function Perfil() {
  return (
    <>
      <Page.Header>
        <Page.Header.Title>Perfil</Page.Header.Title>
      </Page.Header>
      <Page.Main>
        <PerfilSection />
      </Page.Main>
    </>
  )
}
