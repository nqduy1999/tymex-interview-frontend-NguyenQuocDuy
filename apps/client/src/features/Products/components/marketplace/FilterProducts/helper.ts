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
    value: 'earliest',
  },
  {
    label: 'Lastest',
    value: 'lastest',
  },
]

const optionPrice: BaseOptionType[] = [
  {
    label: 'Low to high',
    value: 'DESC',
  },
  {
    label: 'High to low',
    value: 'ASC',
  },
]

export { optionTier, optionTheme, optionPrice, optionTime }
