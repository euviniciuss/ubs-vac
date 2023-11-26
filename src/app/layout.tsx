import { GlobalStyle, StyledProvider } from '@/presentation/external/styled'
import StyledRegistry from '@/presentation/external/styled/registry/styledRegistry'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'UBS VAC',
  description: 'Vacinação de forma simples'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <StyledProvider>
        <body className={inter.className}>
          <StyledRegistry>{children}</StyledRegistry>
          <GlobalStyle />
        </body>
      </StyledProvider>
    </html>
  )
}
