import { IMAGES_CONST } from '@client/configs'
import { Button, Drawer, Image, Typography } from 'antd'
import headerModule from '@client/components/Layout/Header/Header.module.scss'
import { useState } from 'react'
import { HEADER_NAVIGATION } from '../const'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { LanguageDropdown } from '@client/components/common'

const { Text } = Typography
const HeaderMobile = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { pathname } = useLocation()

  const onClose = () => {
    setOpen(false)
  }

  const onOpenDrawer = () => {
    setOpen(true)
  }

  return (
    <>
      <Button
        className={headerModule.header_action_mobile}
        variant="outlined"
        onClick={onOpenDrawer}
      >
        <Image
          src={open ? IMAGES_CONST.icons.closeMenu : IMAGES_CONST.icons.menu}
          alt={open ? IMAGES_CONST.icons.closeMenu : IMAGES_CONST.icons.menu}
          width={40}
          preview={false}
        />
      </Button>
      <Drawer
        closable
        open={open}
        onClose={onClose}
        placement="bottom"
        title={null}
        rootClassName={'drawer_header_content'}
      >
        <div className={headerModule.header_content_mobile}>
          {Object.keys(HEADER_NAVIGATION).map(key => (
            <Link key={key} to={HEADER_NAVIGATION[key].path} onClick={onClose}>
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
          <Button type="primary" size="large">
            <Typography.Title
              level={5}
              className={headerModule.header_action_title}
            >
              Connect Wallet
            </Typography.Title>
          </Button>
          <LanguageDropdown />
        </div>
      </Drawer>
    </>
  )
}

export default HeaderMobile
