import Routes from '@client/routes'
import '@client/assets/styles/global.scss'
import ThemeProvider from '@client/themes'

function WrappedApp() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}

export default WrappedApp
