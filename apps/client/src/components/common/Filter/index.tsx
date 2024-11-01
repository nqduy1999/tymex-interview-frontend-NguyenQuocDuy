import FilterContextProvider from './Filter.context'
import FilterHandler from './Filter.Handler'
import { FilterProps } from './type'

const FilterPresenter = (props: FilterProps) => {
  return (
    <FilterContextProvider {...props}>
      <FilterHandler />
    </FilterContextProvider>
  )
}

export default FilterPresenter
