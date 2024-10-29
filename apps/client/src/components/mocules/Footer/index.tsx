import { Link } from 'react-router-dom'
import { navigationData } from './const'
import { Typography } from 'antd'

const Footer = () => {
  return (
    <div className="w-full max-w-[1920px] bg-neutral p-16 pb-[12rem]">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col">
          <Typography.Title className="font-drone-ranger uppercase" level={5}>
            Navigation
          </Typography.Title>
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
