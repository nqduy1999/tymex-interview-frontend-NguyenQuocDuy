import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const useURLParams = () => {
  const location = useLocation()
  return useMemo(
    () => Object.fromEntries(new URLSearchParams(location?.search)),
    [location?.search],
  )
}

export default useURLParams
