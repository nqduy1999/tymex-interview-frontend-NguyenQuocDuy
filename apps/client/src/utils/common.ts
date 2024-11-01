import { mockBackgroundCard, mockBackgroundImage } from '@client/configs'
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

export const onGetRandomPropertyCard = () => {
  const image =
    mockBackgroundImage[Math.floor(Math.random() * mockBackgroundImage.length)]
  const background =
    mockBackgroundCard[Math.floor(Math.random() * mockBackgroundCard.length)]

  return {
    background,
    image,
  }
}

export function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
