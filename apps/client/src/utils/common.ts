import React from 'react'
import fs from 'fs'

export const loadable = (loader: () => any) =>
  React.lazy(() =>
    new Promise<void>(resolve =>
      setTimeout(() => {
        resolve()
      }, 250),
    ).then(loader),
  )

export const getTokens = (path: string) => {
  const raws = fs.readFileSync(path, 'utf8')
  let obj = {}
  raws
    .split('\n') // get line by line
    .filter(line => line.length > 0 && !line.startsWith('//')) // check if line is comment remove it
    .map(line => {
      const [key, value] = line.split(':')
      obj = Object.assign(obj, {
        [key.replace('$', '')]: value.replace(';', ',').trim(),
      })
      return line
    })
  return obj
}
