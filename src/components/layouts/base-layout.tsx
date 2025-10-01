import Footer from '../footer'
import PageHeader from '../header'
import { Outlet } from 'react-router-dom'

export default function BaseLayout() {
  return (
    <>
      <PageHeader />
      <Outlet />
      <Footer />
    </>
  )
}

