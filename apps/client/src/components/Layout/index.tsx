import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer/Footer'

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
