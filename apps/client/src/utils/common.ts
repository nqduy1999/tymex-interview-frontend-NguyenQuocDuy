import React from 'react'

export const loadable = (loader: () => any) =>
  React.lazy(() =>
    new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve()
      }, 250)
    ).then(loader)
  )
