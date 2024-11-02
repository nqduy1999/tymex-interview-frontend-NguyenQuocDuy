import { Image, ImageProps } from 'antd'
import classNames from 'classnames'
import React, { useState } from 'react'

interface ProgressiveImageProps extends ImageProps {}

const ProgressiveImage = ({
  src,
  className,
  alt,
  ...props
}: ProgressiveImageProps) => {
  const [loading, setLoading] = useState(true)

  return (
    <Image
      src={src as string}
      alt={alt as string}
      onLoad={() => setLoading(false)}
      className={classNames(`${loading ? 'blur' : 'remove-blur'}`, className)}
      loading="lazy"
      {...props}
    />
  )
}

export default React.memo(ProgressiveImage)
