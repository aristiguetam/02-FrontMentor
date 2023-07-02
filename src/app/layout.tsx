import './globals.css'
import { CompanyList, FeaturesList, Navbar, SideMenu } from '@/components'
import { Providers } from './providers'

export const metadata = {
  title: 'Front Mentor',
  description: '02 Front Mentor',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>

        <SideMenu />

          <header>
            <Navbar />
            <FeaturesList />
            <CompanyList />
          </header>

          <main>
            {children}
          </main>

        </Providers>
      </body>
    </html>
  )
}
