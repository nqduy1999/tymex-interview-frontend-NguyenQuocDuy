import { routeString } from '@client/routes/routeString'
import filterProductModule from './FilterProducts.module.scss'
import { Filter, SearchInput, Slider } from '@client/components/common'

const FilterProducts = () => {
  return (
    <div className={filterProductModule.filter_product} style={{}}>
      <Filter
        path={routeString.PRODUCT.root}
        fields={[
          {
            type: 'search',
            name: 'name',
            placeholder: 'Quick search',
          },
          {
            type: 'slider',
            name: 'pricing',
            label: 'PRICE',
            marks: {
              0: {
                style: {
                  transform: 'translate(-5px, 16px)',
                },
                label: '0 ETH',
              },
              200: {
                style: {
                  transform: 'translate(-60px, 16px)',
                  minWidth: '67px',
                },
                label: '200 ETH',
              },
            },
            max: 200,
          },
          {
            type: 'select',
            name: 'tier',
            placeholder: 'Select tier',
            label: 'TIER',
          },
          {
            type: 'select',
            name: 'theme',
            placeholder: 'Select theme',
            label: 'THEME',
          },
          {
            type: 'select',
            name: 'time',
            placeholder: 'Select time',
            label: 'TIME',
          },
          {
            type: 'select',
            name: 'price',
            placeholder: 'Select price mode',
            label: 'PRICE',
          },
        ]}
      />
    </div>
  )
}

export default FilterProducts
