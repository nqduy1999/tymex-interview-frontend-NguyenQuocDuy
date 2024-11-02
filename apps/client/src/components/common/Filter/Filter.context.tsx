import { useURLParams } from '@client/hooks'
import {
  createContext,
  Dispatch,
  useCallback,
  useContext,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { FieldsType, FilterProps } from './type'

type ContextType = {
  filter: Record<string, string>
  fields: FieldsType[]
  params: Record<string, string> | any
  setFilter: Dispatch<any>
  executeSearch: (filter: any) => void
  onSubmitSearch: () => void
  onClearAll: () => void
  path: string
  isLoading?: boolean
  isSupportMobile?: boolean
}

const FilterContext = createContext<ContextType>({
  filter: {},
  fields: [],
  params: {},
  setFilter: () => {},
  executeSearch: () => {},
  onSubmitSearch: () => {},
  onClearAll: () => {},
  path: '',
  isLoading: false,
  isSupportMobile: true,
})

export const useFilterContext = () => useContext(FilterContext)

const FilterContextProvider = ({
  path,
  fields,
  isLoading,
  children,
  isSupportMobile,
}: FilterProps) => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<Record<string, string>>({})
  const params = useURLParams()

  const executeSearch = useCallback(
    (filter: any) => {
      navigate(`${path}?${new URLSearchParams(filter)}`)
    },
    [navigate, path],
  )

  const onClearAll = useCallback(() => {
    setFilter({})
    executeSearch({})
  }, [executeSearch])

  const onSubmitSearch = useCallback(() => {
    const newFilter = {
      ...params,
      ...filter,
    }
    executeSearch(newFilter)
  }, [params, filter, executeSearch])

  return (
    <FilterContext.Provider
      value={{
        path,
        fields,
        params,
        isLoading,
        filter,
        setFilter,
        executeSearch,
        onSubmitSearch,
        onClearAll,
        isSupportMobile,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContextProvider
