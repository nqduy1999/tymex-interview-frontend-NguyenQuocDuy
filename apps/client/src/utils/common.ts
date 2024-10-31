import React from 'react'

// Custom loading React + lazy + setTimeout
export const loadable = (loader: () => any) =>
  React.lazy(() =>
    new Promise<void>(resolve =>
      setTimeout(() => {
        resolve()
      }, 250),
    ).then(loader),
  )

// Custom debounce function
export const debounce = <T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number,
): ((this: ThisParameterType<T>, ...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>

  function debouncedFunction(
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }

  return debouncedFunction
}
