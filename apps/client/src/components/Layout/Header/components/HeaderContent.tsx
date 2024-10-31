import { Link, useLocation } from 'react-router-dom'
import { HEADER_NAVIGATION } from '@client/components/Layout/Header/const'

import headerModule from '@client/components/Layout/Header/Header.module.scss'
import { Button, Typography } from 'antd'
import classNames from 'classnames'
import { LanguageDropdown } from '@client/components/common'

const { Text } = Typography

const HeaderContent = () => {
  const { pathname } = useLocation()
  return [
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
}

export default HeaderContent
