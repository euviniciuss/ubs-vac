'use client'

import { LoginSection } from '@/presentation/modules/login/components/LoginSection/LoginSection'
import { Page } from '@/presentation/shared/components/layout'

export default function Login() {
  return (
    <Page.Main>
      <LoginSection />
    </Page.Main>
  )
}
