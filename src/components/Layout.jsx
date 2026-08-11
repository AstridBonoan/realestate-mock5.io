import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import EditorialHeader from './EditorialHeader'
import EditorialFooter from './EditorialFooter'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <EditorialHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <EditorialFooter />
    </div>
  )
}
