import { Footer, Header } from '@client/components/mocules'
import { Outlet } from 'react-router-dom'

const GeneralLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default GeneralLayout
