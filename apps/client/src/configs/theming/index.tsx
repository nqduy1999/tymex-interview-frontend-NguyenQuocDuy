import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'
import { themeConfig } from './config'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
}

export default ThemeProvider
