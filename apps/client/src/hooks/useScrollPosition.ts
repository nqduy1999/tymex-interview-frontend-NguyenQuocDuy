import { useCallback, useEffect, useState } from 'react'

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  const fromPosition = useCallback(
    (position: number) => {
      return scrollPosition > position
    },
    [scrollPosition],
  )

  return {
    position: scrollPosition,
    fromPosition,
  }
}

export default useScrollPosition
