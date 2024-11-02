import { Outlet } from 'react-router-dom'
import Header from '@client/components/Layout/Header'
import Footer from '@client/components/Layout/Footer'
import layoutModule from './Layout.module.scss'

const GeneralLayout = () => {
  return (
    <div className={layoutModule.background_main_overlay}>
      <div className={layoutModule.layout_container}>
        <Header />
        <div className={layoutModule.layout_content}>
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default GeneralLayout
