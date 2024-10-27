import { Header } from '@client/components/mocules'
import { Outlet } from 'react-router-dom'

const GeneralLayout = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  )
}

export default GeneralLayout
