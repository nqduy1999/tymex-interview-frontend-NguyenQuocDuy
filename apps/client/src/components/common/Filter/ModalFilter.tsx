import { Button, Drawer, Typography } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
import React, { ReactNode, useState } from 'react'
import filterModule from './Filter.module.scss'

const ModalFilter = ({ children }: { children: any }) => {
  const [open, setOpen] = useState<boolean>(false)
  return [
    <Button
      size="large"
      icon={<FilterOutlined width={24} height={24} />}
      key="button-filter"
      onClick={() => setOpen(true)}
    >
      Filter List
    </Button>,
    <Drawer
      open={open}
      key={'drawer-filter-mobile'}
      placement="bottom"
      closable
      rootClassName={'drawer_header_content'}
      onClose={() => {
        setOpen(false)
      }}
      title="Filter products"
    >
      <Typography.Title level={5} style={{ margin: 0, position: 'fixed' }}>
        Filter products
      </Typography.Title>
      <div className={filterModule.filter_container_drawer_container}>
        {children({ callbackSubmit: () => setOpen(false) })}
      </div>
    </Drawer>,
  ]
}

export default ModalFilter
