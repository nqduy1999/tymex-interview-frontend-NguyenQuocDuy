import React from 'react'

function useInterval<T>(callback: T, delay: number | null) {
  const intervalRef = React.useRef<number | null>(null)
  const savedCallback = React.useRef<any>(callback)
  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    const tick = () => savedCallback.current()
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(tick, delay)
      return () => window.clearInterval(intervalRef.current as number)
    }
  }, [delay])

  return intervalRef
}

export default useInterval
