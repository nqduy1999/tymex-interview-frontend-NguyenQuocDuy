import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'
import theme from './config'

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>
}

export default ThemeProvider
