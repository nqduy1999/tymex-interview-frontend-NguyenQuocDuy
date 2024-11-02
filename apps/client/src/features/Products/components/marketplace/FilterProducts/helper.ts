import { BaseOptionType } from 'antd/es/select'

const optionTier: BaseOptionType[] = [
  {
    label: 'Basic',
    value: 'Basic',
  },
  {
    label: 'Premium',
    value: 'Premium',
  },
  {
    label: 'Deluxe',
    value: 'Deluxe',
  },
]

const optionTheme: BaseOptionType[] = [
  {
    label: 'Dark',
    value: 'Dark',
  },
  {
    label: 'Light',
    value: 'Light',
  },
  {
    label: 'Colorful',
    value: 'Colorful',
  },
  {
    label: 'Halloween',
    value: 'Halloween',
  },
]

const optionTime: BaseOptionType[] = [
  {
    label: 'Earliest',
    value: 'asc',
  },
  {
    label: 'Lastest',
    value: 'desc',
  },
]

const optionPrice: BaseOptionType[] = [
  {
    label: 'Low to high',
    value: 'asc',
  },
  {
    label: 'High to low',
    value: 'desc',
  },
]

export { optionTier, optionTheme, optionPrice, optionTime }
