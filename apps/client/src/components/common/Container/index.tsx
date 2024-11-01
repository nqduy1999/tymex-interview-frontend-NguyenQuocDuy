import { ReactNode } from 'react'
import containerModule from './Container.module.scss'

const Container = ({ children }: { children: ReactNode }) => {
  return <div className={containerModule.container}>{children}</div>
}

export default Container
