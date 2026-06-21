import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/common/navbar'
import { Footer } from '@/components/common/footer'

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 px-6 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
