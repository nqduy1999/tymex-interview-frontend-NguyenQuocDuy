import { MapperProducts } from './products.mapping'
import { onGetRandomPropertyCard } from '../utils'
describe('ProductMapping', () => {
  test('MappersProducts should render correctly', () => {
    const INPUT_MOCK_PRODUCTS = [
      {
        id: 1,
        title: 'Metal Gear Girl',
        category: 'Mythic',
        price: 30.09,
        isFavorite: false,
        createdAt: 1624533946000,
        theme: 'Halloween',
        tier: 'Premium',
        imageId: 8,
        author: {},
      },
    ]

    const OUTPUT_MOCK_PRODUCTS = [
      {
        id: 1,
        title: 'Metal Gear Girl',
        category: 'Mythic',
        price: 30.09,
        isFavorite: false,
        createdAt: 1624533946000,
        theme: 'Halloween',
        tier: 'Premium',
        author: {},
        ...onGetRandomPropertyCard('Premium'),
      },
    ]

    const response = MapperProducts(INPUT_MOCK_PRODUCTS)
    expect(response).toEqual(OUTPUT_MOCK_PRODUCTS)
  })
})
