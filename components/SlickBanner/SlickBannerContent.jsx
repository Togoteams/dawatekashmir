
import Image from 'next/image'
import React from 'react'

export const SlickBannerContent = ({ index, image }) => {
  return (
    <div className='text-white'>
        <Image
            src={image}
            alt="banner-title"
            width={1920}
            height={600}
        />
    </div>
  )
}
