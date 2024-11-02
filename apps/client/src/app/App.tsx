import Routes from '@client/routes'
import '@client/assets/styles/global.scss'
import { BrowserRouter } from 'react-router-dom'

function WrappedApp() {
  return <Routes />
}

export default WrappedApp
