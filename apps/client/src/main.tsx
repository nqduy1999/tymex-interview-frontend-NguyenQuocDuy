import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@client/app'
import { ThemeProvider } from './configs'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
