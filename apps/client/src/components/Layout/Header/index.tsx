import { Button, Image, Typography } from 'antd'
import { HEADER_NAVIGATION } from './const'
import headerModule from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { LanguageDropdown } from '@client/components/common'
import { useScreenMode } from '@client/hooks'
import { IMAGES_CONST } from '@client/configs'

const { Text } = Typography
const Header = () => {
  const { pathname } = useLocation()
  const { isDesktop } = useScreenMode()

  return (
    <div className={headerModule.header_container}>
      <div className={headerModule.header_content}>
        {isDesktop ? (
          [
            <div
              className={headerModule.header_navigation}
              key={headerModule.header_navigation}
            >
              {Object.keys(HEADER_NAVIGATION).map(key => (
                <Link key={key} to={HEADER_NAVIGATION[key].path}>
                  <Text
                    className={classNames(headerModule.header_navigation_item, {
                      [headerModule?.['header_navigation_item--active']]:
                        HEADER_NAVIGATION[pathname]?.path ===
                        HEADER_NAVIGATION[key]?.path,
                    })}
                  >
                    {HEADER_NAVIGATION[key].title}
                  </Text>
                </Link>
              ))}
            </div>,
            <div
              className={headerModule.header_action}
              key={headerModule.header_action}
            >
              <Button type="primary" size="large">
                <Typography.Title
                  level={5}
                  className={headerModule.header_action_title}
                >
                  Connect Wallet
                </Typography.Title>
              </Button>
              <LanguageDropdown />
            </div>,
          ]
        ) : (
          <Button type="default">
            <Image
              src={IMAGES_CONST.icons.menu}
              alt={IMAGES_CONST.icons.menu}
              width={24}
            />
          </Button>
        )}
      </div>
    </div>
  )
}

export default Header
