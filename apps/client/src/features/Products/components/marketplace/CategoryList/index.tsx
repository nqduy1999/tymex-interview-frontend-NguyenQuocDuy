import { Button } from 'antd'
import categoryModule from './CategoryList.module.scss'
import { useState } from 'react'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useFilterContext } from '@client/components/common/Filter/Filter.context'
import { routeString } from '@client/routes/routeString'
import { useURLParams } from '@client/hooks'
import { parseObjectToSearch } from '@client/utils'

const categorySample = [
  {
    title: 'All',
    value: '',
  },
  {
    title: 'Upper Body',
    value: 'Upper Body',
  },
  {
    title: 'Lower Body',
    value: 'Lower Body',
  },
  {
    title: 'Hat',
    value: 'Hat',
  },
  {
    title: 'Shoes',
    value: 'Shoes',
  },
  {
    title: 'Accessory',
    value: 'Accessory',
  },
  {
    title: 'Legendary',
    value: 'Legendary',
  },
  {
    title: 'Mythic',
    value: 'Mythic',
  },
  {
    title: 'Epic',
    value: 'Epic',
  },
  {
    title: 'Rare',
    value: 'Rare',
  },
]

const CategoryList = ({
  onChangeOffset,
}: {
  onChangeOffset: (offset: string) => void
}) => {
  const navigate = useNavigate()
  const params = useURLParams()
  const { filter } = useFilterContext()
  const [viewFull, setViewFull] = useState<boolean>(false)

  const onFilterList = (value: string) => {
    onChangeOffset('10') // set default when change
    navigate(
      `${routeString.PRODUCT.root}?${parseObjectToSearch({
        category: value,
        ...filter,
      })}`,
    )
  }

  return (
    <div className={categoryModule.category_container}>
      <div
        className={
          !viewFull
            ? categoryModule.category_container_normal
            : categoryModule.category_container_viewfull
        }
      >
        {categorySample.map((category, index) => (
          <Button
            key={category.value + index}
            className={categoryModule.category_container_button}
            type={params?.category === category.value ? 'primary' : 'default'}
            onClick={() => onFilterList(category.value)}
          >
            {category.title}
          </Button>
        ))}
      </div>
      <Button
        type="link"
        icon={viewFull ? <DownOutlined /> : <UpOutlined />}
        className={categoryModule.category_container_control}
        onClick={() => setViewFull(!viewFull)}
      />
    </div>
  )
}

export default CategoryList
