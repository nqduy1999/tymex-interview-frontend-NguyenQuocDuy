import { SliderMarks } from 'antd/es/slider'

export interface SliderProps {
  range?: boolean | any
  label?: string
  marks?: SliderMarks
  min?: number
  max: number
}
