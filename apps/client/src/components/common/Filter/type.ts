import { InputProps } from 'antd'
import { SliderProps } from '@client/components/common/Slider/type'
import { SelectCustomProps } from '@client/components/common/Select'

export type BaseType = {
  name: string
  label?: string
  className?: string
  value?: string | number | number[] | any
  placeholder?: string
}

export interface SearchType
  extends BaseType,
    Omit<InputProps, 'name' | 'style' | 'value'> {
  type: 'search'
}

export interface SliderType extends BaseType, SliderProps {
  type: 'slider'
}

export interface SelectType
  extends BaseType,
    Omit<SelectCustomProps, 'placeholder'> {
  type: 'select'
}

export interface FilterProps {
  path: string
  fields: FieldsType[]
  isLoading?: boolean
  children?: React.ReactNode
}

export type FieldsType = SearchType | SliderType | SelectType
