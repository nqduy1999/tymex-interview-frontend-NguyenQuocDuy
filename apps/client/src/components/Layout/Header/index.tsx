import headerModule from './Header.module.scss'
import { useScreenMode } from '@client/hooks'
import { HeaderContent, HeaderContentMobile } from './components'

const Header = () => {
  const { isDesktop } = useScreenMode()

  return (
    <div className={headerModule.header_container}>
      <div className={headerModule.header_content}>
        {isDesktop ? <HeaderContent /> : <HeaderContentMobile />}
      </div>
    </div>
  )
}

export default Header
