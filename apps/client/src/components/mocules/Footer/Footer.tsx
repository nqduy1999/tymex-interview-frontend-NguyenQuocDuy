import { Link } from 'react-router-dom'
import { navigationData } from './const'
import { Typography } from 'antd'

import footerModule from './Footer.module.scss'
import cn from 'classnames'

const { Title } = Typography

const Footer = () => {
  return (
    <div className={cn(footerModule.container, 'container_fluid')}>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col">
          <Title level={4} className="font-drone-ranger uppercase">
            Navigation
          </Title>
          <div className="grid grid-cols-3">
            {navigationData.map(navData => (
              <Link
                to={navData.path}
                target={navData?.isExternalLink ? '_blank' : '_self'}
              >
                {navData.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
